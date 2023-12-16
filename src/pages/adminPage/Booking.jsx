import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteDataBooking,
  getDataBooking,
} from "../../redux/action/bookingAdminAction";
import dayjs from "dayjs";
import { Button, Modal, Spinner } from "flowbite-react";
import { Toaster } from "react-hot-toast";
import { loginSuccess } from "../../redux/action/loginAction";

function Booking() {
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);
  const [openModalDelete, setOpenModalDelete] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [isEdit, setIsEdit] = useState("");
  const [editBooking, setEditBooking] = useState(null);
  const { isLoading, bookings } = useSelector((state) => state.bookingAdmin);

  useEffect(() => {
    dispatch(getDataBooking());
  }, [dispatch]);

  const handleSearch = (e) => {
    setSearchKeyword(e.target.value);
  };

  const filteredBookings = bookings.data?.filter((item) => {
    const jenisKonselingInfo = item.jenisKonseling;
    const bookingSearchCriteria = [
      jenisKonselingInfo?.jenis,
      item.pasien?.namaPasien,
      item.konselor?.nama,
      dayjs(item.tanggal).format("DD-MM-YYYY"),
      item.waktu,
      jenisKonselingInfo?.platformPertemuan,
      item.status,
    ];

    return bookingSearchCriteria.some(
      (value) =>
        typeof value === "string" &&
        value.toLowerCase().includes(searchKeyword.toLowerCase())
    );
  });

  const handleDelete = (id) => {
    setOpenModalDelete(true);
    setEditBooking(id);
  };

  const handleAcceptDelete = async () => {
    await dispatch(deleteDataBooking(editBooking));
    dispatch(getDataBooking());
    setOpenModalDelete(false);
  };

  return (
    <div>
      <Toaster />
      <div className="text-sky-500 font-semibold text-2xl">Data Booking</div>
      <div>
        <div className="flex justify-between items-center mt-5">
          <div></div>
          <input
            className="border h-8 rounded text-sm"
            type="search"
            placeholder="Cari"
            value={searchKeyword}
            onChange={handleSearch}
          />
        </div>
        <div className="relative max-h-80 overflow-x-auto shadow-md sm:rounded-lg mt-5">
          {isLoading ? (
            <div className=" text-center overflow-hidden py-10 flex justify-center items-center">
              <Spinner />
            </div>
          ) : (
            <table className=" w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs sticky top-0 z-10 text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Nama Pasien
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Nama Konselor
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Tanggal
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Jam
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Jenis Konseling
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Platform
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Aksi
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredBookings?.map((item) => (
                  <tr
                    key={item._id}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {item.pasien?.namaPasien}
                    </th>
                    <td className="px-6 py-4">{item.konselor?.nama}</td>
                    <td className="px-3 py-4">
                      {dayjs(item.tanggal).format("DD-MM-YYYY")}
                    </td>
                    <td className="px-6 py-4">{item.waktu}</td>
                    <td className="px-6 py-4">{item.jenisKonseling?.jenis}</td>
                    <td className="px-6 py-4">
                      {item.jenisKonseling?.platformPertemuan}
                    </td>
                    <td className="px-6 py-4">
                      <div
                        className={`${
                          item.status === "Pending"
                            ? "bg-red-100 text-center text-red-400 border border-red-400 rounded px-1"
                            : item.status === "Confirmed"
                            ? "bg-sky-100 text-center text-sky-400 border border-sky-400 rounded px-1"
                            : item.status === "Dimulai"
                            ? "bg-yellow-100 text-center text-yellow-400 border border-yellow-400 rounded"
                            : "bg-green-100 text-center text-green-400 border border-green-400 rounded"
                        }`}
                      >
                        {item.status}
                      </div>
                    </td>

                    <td className="px-6 py-4 gap-2 flex items-center">
                      <a
                        onClick={() => handleDelete(item._id)}
                        href="#"
                        className="font-medium bg-red-400 text-white py-1 px-2 rounded-lg"
                      >
                        Delete
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        {/* modal konfirmasi delete */}
        <Modal
          size={"xl"}
          show={openModalDelete}
          onClose={() => setOpenModalDelete(false)}
        >
          <Modal.Header>Hapus Data Booking</Modal.Header>
          <Modal.Body>
            <p>Apakah Anda yakin ingin menghapus data booking ini?</p>
          </Modal.Body>
          <Modal.Footer>
            <Button
              className="bg-red-500 text-white"
              onClick={handleAcceptDelete}
            >
              Ya, Hapus
            </Button>
            <Button
              className="bg-sky-500"
              onClick={() => setOpenModalDelete(false)}
            >
              Batal
            </Button>
          </Modal.Footer>
        </Modal>
        {/* akhir modal */}
      </div>
    </div>
  );
}

export default Booking;
