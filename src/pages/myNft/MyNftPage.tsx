import { useModal } from "../../hooks/useModal";
import { useDeleteModal } from "../../components/common/modal/DeleteModal";

const MyNftPage = () => {
  const { openModal } = useModal();
  const deleteModal = useDeleteModal();
  return (
    <div
      onClick={() => {
        openModal(deleteModal);
        console.log("here");
      }}
    >
      MyNftPage
    </div>
  );
};

export default MyNftPage;
