"use client";

import { useEffect, useMemo, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "@/lib/firebase";

const savedTimestampValue = (post) => {
  if (post.updatedAt?.toMillis) return post.updatedAt.toMillis();
  if (post.publishedAt?.toMillis) return post.publishedAt.toMillis();
  if (post.createdAt?.toMillis) return post.createdAt.toMillis();
  return 0;
};

const publishDateValue = (post) => {
  const parsed = Date.parse(post.publishDate || "");
  return Number.isNaN(parsed) ? 0 : parsed;
};

export default function useManagedPosts(targets) {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const targetKey = targets.join("|");

  useEffect(() => {
    const loadingFallback = window.setTimeout(() => setIsLoading(false), 10000);
    const unsubscribe = onSnapshot(
      collection(db, "objave"),
      { includeMetadataChanges: true },
      (snapshot) => {
        setPosts(snapshot.docs.map((document) => ({ id: document.id, ...document.data() })));
        if (!snapshot.metadata.fromCache) {
          window.clearTimeout(loadingFallback);
          setIsLoading(false);
        }
      },
      () => {
        window.clearTimeout(loadingFallback);
        setPosts([]);
        setIsLoading(false);
      }
    );
    return () => {
      window.clearTimeout(loadingFallback);
      unsubscribe();
    };
  }, []);

  const managedPosts = useMemo(() => {
    const acceptedTargets = targetKey.split("|").filter(Boolean);
    return posts
      .filter((post) => post.published !== false)
      .filter((post) => (post.targets || []).some((target) => acceptedTargets.includes(target)))
      .sort((left, right) => {
        const leftPinned = left.pinToTop === true;
        const rightPinned = right.pinToTop === true;
        if (leftPinned !== rightPinned) return leftPinned ? -1 : 1;
        const leftValue = leftPinned
          ? savedTimestampValue(left)
          : (publishDateValue(left) || savedTimestampValue(left));
        const rightValue = rightPinned
          ? savedTimestampValue(right)
          : (publishDateValue(right) || savedTimestampValue(right));
        return rightValue - leftValue;
      });
  }, [posts, targetKey]);

  return { posts: managedPosts, isLoading };
}
