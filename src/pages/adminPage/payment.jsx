import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteDataPayment,
  getDataPayment,
  updateDataPayment,
} from "../../redux/action/paymentAdminAction";
import dayjs from "dayjs";
import { Button, Modal, Spinner } from "flowbite-react";
import { Toaster } from "react-hot-toast";

const Payment = () => {
  const dispatch = useDispatch();
  const [openModalDelete, setOpenModalDelete] = useState(false);
  const [isEdit, setIsEdit] = useState("");
  const [editPayment, setEditPayment] = useState(null);
  const [searchKeyword, setSearchKeyword] = useState("");
  const { isLoading, payments } = useSelector((state) => state.paymentAdmin);
  const [valueStatus, setValueStatus] = useState({
    statusPembayaran: "Paid",
    statusBooking: "Confirmed",
  });

  console.log(payments.data);
  useEffect(() => {
    dispatch(getDataPayment());
  }, [dispatch]);

  const handleSearch = (e) => {
    setSearchKeyword(e.target.value);
  };

  const filteredPayments = payments.data?.filter((item) =>
    Object.values(item).some(
      (value) =>
        typeof value === "string" &&
        value.toLowerCase().includes(searchKeyword.toLowerCase())
    )
  );

  const handleUpdate = async (id) => {
    setEditPayment(id);
    setOpenModalDelete(true);
  };

  const handleAcceptUpdate = async () => {
    await dispatch(updateDataPayment(editPayment, valueStatus));
    dispatch(getDataPayment());
    setOpenModalDelete(false);
  };

  const handleDelete = async (id) => {
    setEditPayment(id);
    setOpenModalDelete(true);
  };

  const handleAcceptDelete = async () => {
    await dispatch(deleteDataPayment(editPayment));
    dispatch(getDataPayment());
    setOpenModalDelete(false);
  };

  return (
    <div>
      <Toaster />
      <div className="text-sky-500 font-semibold text-2xl">Data Payment</div>
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
                    Pasien
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Konselor
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Metode Pembayaran
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Tanggal Bayar
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
                {filteredPayments?.map((item) => (
                  <tr
                    key={item._id}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {item.dataBooking[0]?.pasien.namaPasien}
                    </th>
                    <td className="px-6 py-4">
                      {item.dataBooking[0]?.konselor.nama}
                    </td>
                    <td className="px-6 py-4">{item.metodePembayaran}</td>
                    {dayjs(item.tanggalBayar).format("DD-MM-YYYY")}
                    <td className="px-6 py-4">
                      {item.dataBooking[0]?.jenisKonseling?.jenis}
                    </td>
                    <td className="px-6 py-4">{item.statusPembayaran}</td>
                    <td className="px-6 py-10 gap-2 flex items-center">
                      <a
                        onClick={() => handleUpdate(item._id)}
                        href="#"
                        className="font-medium bg-yellow-200 text-blue-950 py-1 px-2 rounded-lg"
                      >
                        Update
                      </a>
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

        {/* modal for delete/update confirmation */}
        <Modal show={openModalDelete} onClose={() => setOpenModalDelete(false)}>
          <Modal.Header>
            {handleAcceptUpdate ? "Update Data Payment" : "Hapus Data Payment"}
          </Modal.Header>
          <Modal.Body>
            <p>
              {handleAcceptUpdate
                ? "Apakah Anda yakin ingin mengupdate data payment ini?"
                : "Apakah Anda yakin ingin menghapus data payment ini?"}
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button
              className={`${
                handleAcceptUpdate ? "bg-sky-500" : "bg-red-500"
              } text-white`}
              onClick={
                handleAcceptUpdate ? handleAcceptUpdate : handleAcceptDelete
              }
            >
              {handleAcceptUpdate ? "Ya, Update" : "Ya, Hapus"}
            </Button>
            <Button
              className="bg-sky-500"
              onClick={() => setOpenModalDelete(false)}
            >
              Batal
            </Button>
          </Modal.Footer>
        </Modal>
        {/* akhir modal delete/update */}
      </div>
    </div>
  );
};

export default Payment;
