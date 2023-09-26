import Table from "react-bootstrap/Table";
import ListIcon from "../images/document.png";

const TableContent = () => {
  return (
    <Table className="mt-2" responsive>
      <thead className="border-bottom">
        <tr className="border border-white">
          <th>Prescriptions</th>
          <th>Date</th>
          <th>Duration</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <span className="rounded bg-light p-2">
              <img src={ListIcon} alt="prescription" />
            </span>
            Heart Diseases
          </td>
          <td>25th October</td>
          <td>3 months</td>
        </tr>
        <tr className="border border-white">
          <td>
            <span className="rounded bg-light p-2">
              <img src={ListIcon} alt="prescription" />
            </span>
            Skin Care
          </td>
          <td>8th August</td>
          <td>2 months</td>
        </tr>
      </tbody>
    </Table>
  );
};
export default TableContent;
