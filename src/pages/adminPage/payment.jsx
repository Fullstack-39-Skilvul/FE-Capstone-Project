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
import { loginSuccess } from "../../redux/action/loginAction";

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

  useEffect(() => {
    dispatch(getDataPayment());
  }, [dispatch]);

  const handleSearch = (e) => {
    setSearchKeyword(e.target.value);
  };

  const filteredPayments = payments.data?.filter((item) => {
    const bookingInfo = item.dataBooking[0];
    const bookingSearchCriteria = [
      bookingInfo?.jenisKonseling?.jenis,
      bookingInfo?.pasien.namaPasien,
      bookingInfo?.konselor.nama,
      item.metodePembayaran,
      dayjs(item.tanggalBayar).format("DD-MM-YYYY"),
      bookingInfo?.status,
    ];

    return bookingSearchCriteria.some(
      (value) =>
        typeof value === "string" &&
        value.toLowerCase().includes(searchKeyword.toLowerCase())
    );
  });

  const handleUpdate = async (id) => {
    setEditPayment(id);
    setIsEdit(true);
    setOpenModalDelete(true);
  };

  const handleAcceptUpdate = async () => {
    await dispatch(updateDataPayment(editPayment, valueStatus));
    dispatch(getDataPayment());
    setOpenModalDelete(false);
  };

  const handleDelete = async (id) => {
    setEditPayment(id);
    setIsEdit(false);
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
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
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
                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {item.dataBooking[0]?.pasien.namaPasien}
                    </td>
                    <td className="px-6 py-4">
                      {item.dataBooking[0]?.konselor.nama}
                    </td>
                    <td className="px-6 py-4">{item.metodePembayaran}</td>
                    <td className="px-6 py-4">
                      {dayjs(item.tanggalBayar).format("DD-MM-YYYY")}
                    </td>
                    <td className="px-6 py-4">
                      {item.dataBooking[0]?.jenisKonseling?.jenis}
                    </td>
                    <td className="px-6 py-4">
                      <div
                        className={`${
                          item.statusPembayaran === "Pending"
                            ? "bg-red-100 text-center text-red-400 border border-red-400 rounded px-1"
                            : item.statusPembayaran === "Confirmed"
                            ? "bg-sky-100 text-center text-sky-400 border border-sky-400 rounded px-1"
                            : item.statusPembayaran === "Dimulai"
                            ? "bg-yellow-100 text-center text-yellow-400 border border-yellow-400 rounded"
                            : "bg-green-100 text-center text-green-400 border border-green-400 rounded"
                        }`}
                      >
                        {item.statusPembayaran}
                      </div>
                    </td>
                    <td className="px-6 py-4 gap-2 flex items-center">
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

        {/* modal for update confirmation */}
        <Modal
          show={openModalDelete && isEdit}
          onClose={() => setOpenModalDelete(false)}
        >
          <Modal.Header>Update Data Payment</Modal.Header>
          <Modal.Body>
            <p>Are you sure you want to update this payment data?</p>
          </Modal.Body>
          <Modal.Footer>
            <Button
              className="bg-sky-500 text-white"
              onClick={handleAcceptUpdate}
            >
              Yes, Update
            </Button>
            <Button
              className="bg-sky-500"
              onClick={() => setOpenModalDelete(false)}
            >
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>

        {/* modal for delete confirmation */}
        <Modal
          size={"xl"}
          show={openModalDelete && !isEdit}
          onClose={() => setOpenModalDelete(false)}
        >
          <Modal.Header>Hapus Data Payment</Modal.Header>
          <Modal.Body>
            <p>Apakah kamu yakin akan menghapus data payment?</p>
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
        {/* end of delete/update modal */}
      </div>
    </div>
  );
};

export default Payment;
