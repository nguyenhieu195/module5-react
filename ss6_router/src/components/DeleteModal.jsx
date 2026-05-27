import {Button, Modal} from "react-bootstrap";
import {toast} from "react-toastify";
import {deleteById} from "../service/studentService.js";

const DeleteModal = ({
                         isShow,
                         deleteStudent,
                         closeModal,
                         setReloading
                     }) => {

    const handleClose = () => {
        closeModal();
    };

    const handleDelete = () => {
        const fetData = async () => {
            let isSuccess = await deleteById(deleteStudent.id);
            if (isSuccess) {
                setReloading(prev => !prev);
                toast.success("🗑️ Xoá sinh viên thành công");
            } else {
                toast.error("❌ Xoá sinh viên thất bại");
            }
            closeModal();
        };
        fetData();
    };

    return (
        <Modal show={isShow} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>
                    Xác nhận xoá
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                Bạn có chắc muốn xoá sinh viên:
                <strong className="text-danger">{" "} {deleteStudent.name}</strong>?
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Huỷ</Button>
                <Button variant="danger" onClick={handleDelete}>Xoá</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default DeleteModal;