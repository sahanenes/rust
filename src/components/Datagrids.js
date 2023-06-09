import React, { useEffect } from "react";
import "devextreme/dist/css/dx.light.css";

import {
  DataGrid,
  Column,
  SearchPanel,
  FilterRow,
  Pager,
  Paging,
  Toolbar,
  Item,
  Editing,
  StateStoring,
} from "devextreme-react/data-grid";

import { employees } from "./newAccounts";

function App() {
  // changing name of the button
  useEffect(() => {
    const addRowButton = document.getElementsByClassName("dx-button-text");
    if (addRowButton.length > 0) {
      if (window.screen.height < 1000) {
        addRowButton[0].innerHTML = "";
      } else {
        addRowButton[0].innerHTML = "Yeni hesap ekle";
      }
    }
  }, []);

  return (
    <div className="App">
      <DataGrid
        dataSource={employees}
        keyExpr="EmployeeID"
        allowColumnReordering={true}
        showBorders={true}
        showColumnLines={true}
        rowAlternationEnabled={true}
      >
        <StateStoring enabled={true} type="localStorage" storageKey="storage" />
        <FilterRow visible={true} applyFilter="onClick" />

        <SearchPanel visible={true} placeholder="Search Objects" width={380} />
        <Paging defaultPageSize={10} />
        <Pager
          visible={true}
          showNavigationButtons={true}
          showInfo={true}
          showPageSizeSelector={true}
        />

        <Column dataField="Sosyal Medya Linki"></Column>
        <Column dataField="Sosyal Medya Adı"></Column>
        <Column dataField="Açıklama"></Column>
        <Editing mode="popup" allowAdding={true} />

        <Toolbar>
          {/* <Item name="exportButton" /> */}
          <Item name="addRowButton" showText="always" location="after" />
          {/* <Item name="columnChooserButton" /> */}
          <Item
            name="searchPanel"
            showText="always"
            location="before"
            visible={true}
          />
          <Item name="filterRow" location="before" visible={true} />
        </Toolbar>
      </DataGrid>
    </div>
  );
}

export default App;
