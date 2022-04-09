import Header from "../Components/Header";
import Footer from "../Components/Footer";
import SubHeader from "../Components/SubHeader";

import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

const dummyRows = [
  { id: 1, title: "컴", date: "220404" },
  { id: 2, title: "퓨", date: "220405" },
  { id: 3, title: "터", date: "220406" },
  { id: 4, title: "공", date: "220407" },
  { id: 5, title: "학", date: "220408" },
  { id: 6, title: "부", date: "220409" },
  { id: 7, title: "공", date: "220410" },
  { id: 8, title: "지", date: "220411" },
  { id: 9, title: "사항", date: "220412" },
  { id: 10, title: "입니", date: "220413" },
  { id: 11, title: "다", date: "220414" },
];

const dummycolumns: GridColDef[] = [
  {
    field: "id",
    headerName: "번호",
    flex: 1,
    disableColumnMenu: true,
    headerAlign: "center",
    sortable: false,
    align: "center",
  },
  {
    field: "title",
    headerName: "제목",
    flex: 8,
    disableColumnMenu: true,
    headerAlign: "center",
    sortable: false,
  },
  {
    field: "date",
    headerName: "작성일",
    flex: 1,
    sortable: true,
    headerAlign: "center",
    disableColumnMenu: true,
    align: "center",
  },
];

const Announcement = () => {
  return (
    <div>
      <Header />
      <SubHeader main="소식" sub="공지사항" />
      <div
        style={{
          height: 630,
          width: "85%",
          paddingTop: "3%",
          paddingBottom: "3%",
          marginLeft: "7.5%",
          marginRight: "7.5%",
          justifyContent: "center",
          display: "flex",
        }}
      >
        <DataGrid
          rows={dummyRows}
          columns={dummycolumns}
          pageSize={10}
          rowsPerPageOptions={[4]}
          sx={{ justifyContent: "center" }}
          disableColumnSelector
          onRowClick={(params) => alert(`${params.id}번째 cell 선택됨`)}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Announcement;
