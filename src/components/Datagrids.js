import React from "react";
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
} from "devextreme-react/data-grid";

import { employees } from "./employees";

function App() {
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
        <FilterRow visible={true} applyFilter="onClick" />
        <SearchPanel visible={true} placeholder="Search Objects" width={380} />
        <Paging defaultPageSize={10} />
        <Pager visible={true} showNavigationButtons={true} />

        <Column dataField="Sosyal Medya Linki"></Column>
        <Column dataField="Sosyal Medya Adı"></Column>
        <Column dataField="Açıklama"></Column>
        <Editing
          mode="popup"
          // allowUpdating={true}
          // allowDeleting={true}
          allowAdding={true}
        />
        {/* <Grouping autoExpandAll={expanded} /> */}
        <Toolbar>
          {/* <Item name="groupPanel" /> */}
          {/* <Item location="after">
            <Button
              // text={expanded ? "Collapse All" : "Expand All"}
              width={136}
              // onClick={() => setExpanded((prevExpanded) => !prevExpanded)}
            />
          </Item> */}
          <Item name="exportButton" />
          <Item name="addRowButton" showText="always" location="after" />
          <Item name="columnChooserButton" />
          <Item
            name="searchPanel"
            showText="always"
            location="after"
            visible={true}
          />
        </Toolbar>
      </DataGrid>
    </div>
  );
}

export default App;
