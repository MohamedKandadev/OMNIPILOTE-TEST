"use client";

import MainButton from "@/components/ui/Button";
import MainInput from "@/components/ui/Input";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, useState } from "react";
import { BiTrash } from "react-icons/bi";
import { FaEdit } from "react-icons/fa";

type Props = {};

const Products = (props: Props) => {
  const router = useRouter();
  const [values, setValues] = useState<{ value1: string; value2: string }>({
    value1: "Categorie",
    value2: "Categorie",
  });

  return (
    <>
      <div className="container mx-auto pt-10">
        <div className="flex justify-end">
          <MainButton title={"Retour"} onClick={router.back} type="button" />
        </div>
        <div className="flex flex-col md:flex-row justify-between">
          <div className="flex gap-3 items-end">
            <MainInput
              label=""
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setValues({ ...values, value1: e.target.value })
              }
              value={values.value1}
              id="value1"
              error={null}
            />
            <MainButton title={"Rechercher"} type="button" />
            <MainButton title={"Annuler"} type="button" />
          </div>
          <div className="flex gap-3 items-end">
            <MainInput
              label=""
              value={values.value2}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setValues({ ...values, value2: e.target.value })
              }
              id="value2"
              error={null}
            />
            <MainButton title={"Enregistrer"} type="button" />
            <MainButton title={"Annuler"} type="button" />
          </div>
        </div>

        <table className="min-w-full border-collapse mt-4">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="p-2 text-left">Catégories produits</th>
              <th className="p-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="p-2">Copieurs, imprimantes & multifonctions</td>
              <td className="p-2">
                <button className="bg-green-500 text-white px-2 py-1 mr-2">
                  <FaEdit />
                </button>
                <button className="bg-red-500 text-white px-2 py-1">
                  <BiTrash />
                </button>
              </td>
            </tr>
            <tr>
              <td className="p-2">Smartphone, Tablette, PC, Laptop, PDA</td>
              <td className="p-2">
                <button className="bg-green-500 text-white px-2 py-1 mr-2">
                  <FaEdit />
                </button>
                <button className="bg-red-500 text-white px-2 py-1">
                  <BiTrash />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Products;
