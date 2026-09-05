"use client";

import { useEffect, useMemo, useState } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore/lite";
import { firebaseApp } from "@/lib/firebase-app";

const homepageDb = getFirestore(firebaseApp);

export default function HomepageInfoLists() {
  const [studentInfo, setStudentInfo] = useState([]);
  const [otherInfo, setOtherInfo] = useState([]);

  useEffect(() => {
    let active = true;

    const loadInfo = async () => {
      const [studentSnapshot, otherSnapshot] = await Promise.all([
        getDocs(collection(homepageDb, "1")),
        getDocs(collection(homepageDb, "2")),
      ]);

      if (!active) return;

      setStudentInfo(
        studentSnapshot.docs.map((document) => ({
          ...document.data(),
          id: document.id,
        })),
      );
      setOtherInfo(
        otherSnapshot.docs.map((document) => ({
          ...document.data(),
          id: document.id,
        })),
      );
    };

    loadInfo();

    return () => {
      active = false;
    };
  }, []);

  const sortedStudentInfo = useMemo(
    () => [...studentInfo].sort((a, b) => b.Broj - a.Broj),
    [studentInfo],
  );
  const sortedOtherInfo = useMemo(
    () => [...otherInfo].sort((a, b) => b.Broj - a.Broj),
    [otherInfo],
  );

  return (
    <div className="flex flex-wrap">
      <div data-aos="fade-in" className="mt-4 w-full text-center md:w-6/12">
        <div>
          <span
            className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full p-3 text-center text-white shadow-lg"
            style={{ backgroundColor: "rgb(254, 125, 1)" }}
          />
        </div>
        <h4
          className="mb-6 text-xl font-semibold uppercase"
          style={{ color: "rgb(254, 125, 1)" }}
        >
          Informacije za učenike
        </h4>
        {sortedStudentInfo.map((item) => (
          <div
            key={item.id}
            className="relative mb-2 flex w-full min-w-0 flex-col break-words rounded-lg"
          >
            <div className="flex-auto">
              <a
                className="font-bold text-blueGray-700 transition-all duration-150 ease-linear hover:text-blueGray-500"
                href={item.Link}
                target="_blank"
                rel="noreferrer"
              >
                {item.Naslov}
              </a>
            </div>
          </div>
        ))}
      </div>

      <div data-aos="fade-in" className="mt-4 w-full text-center md:w-6/12">
        <div>
          <span
            className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full p-3 text-center text-white shadow-lg"
            style={{ backgroundColor: "#92d050" }}
          />
        </div>
        <h4
          className="mb-6 text-xl font-semibold uppercase"
          style={{ color: "#92d050" }}
        >
          Ostale informacije
        </h4>
        {sortedOtherInfo.map((item) => (
          <div
            key={item.id}
            className="relative mb-2 flex w-full min-w-0 flex-col break-words rounded-lg"
          >
            <div className="flex-auto">
              <a
                className="font-bold text-blueGray-700 transition-all duration-150 ease-linear hover:text-blueGray-500"
                href={item.Link}
                target="_blank"
                rel="noreferrer"
              >
                {item.Naslov}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
