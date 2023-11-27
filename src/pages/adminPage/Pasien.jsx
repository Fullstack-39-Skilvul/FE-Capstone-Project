import { Button, Modal } from "flowbite-react";
import { FileSearch } from "phosphor-react";
import React from "react";
import { useState } from "react";

function Pasien() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      <div className="text-sky-500 font-semibold text-2xl">Data Pasien</div>
      <div>
        <div className="flex justify-between items-center mt-5">
          <div></div>
          <input
            className="border h-8 rounded text-sm"
            type="search"
            placeholder="Cari"
          />
        </div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-5">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Nama Pasien
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Alamat
                </th>
                <th scope="col" className="px-6 py-3">
                  No Telepon
                </th>
                <th scope="col" className="px-6 py-3">
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Viki Ade Safaat
                </th>
                <td className="px-6 py-4">vikiade@gmail.com</td>
                <td className="px-6 py-4">Bandung</td>
                <td className="px-6 py-4">089676838269</td>
                <td className="px-6 py-4 gap-2 flex items-center">
                  <a
                    onClick={() => setOpenModal(true)}
                    href="#"
                    className="font-medium bg-yellow-200 text-blue-950 py-1 px-2 rounded-lg"
                  >
                    Update
                  </a>
                  <a
                    href="#"
                    className="font-medium bg-red-400 text-white py-1 px-2 rounded-lg"
                  >
                    Delete
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* modal */}
        <Modal show={openModal} onClose={() => setOpenModal(false)}>
          <Modal.Header>Update Data Pasien</Modal.Header>
          <Modal.Body>
            <form action="" className="flex flex-col text-sm gap-2">
              <label htmlFor="nama">Nama Pasien</label>
              <input
                className="border rounded-lg"
                type="text"
                placeholder="Nama Pasien"
              />

              <label htmlFor="nama">Email</label>
              <input
                className="border rounded-lg"
                type="email"
                placeholder="Email"
              />

              <label htmlFor="nama">Alamat</label>
              <input
                className="border rounded-lg"
                type="text"
                placeholder="Alamat"
              />

              <label htmlFor="nama">No Telepon</label>
              <input
                className="border rounded-lg"
                type="number"
                placeholder="No Telepon"
              />
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => setOpenModal(false)}>I accept</Button>
            <Button color="gray" onClick={() => setOpenModal(false)}>
              Decline
            </Button>
          </Modal.Footer>
        </Modal>
        {/* akhir modal */}
      </div>
    </div>
  );
}

export default Pasien;
