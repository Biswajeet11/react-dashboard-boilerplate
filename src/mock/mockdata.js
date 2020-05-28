const faker = require("faker");
const fs = require("fs");

let tableData = [];
for (let i = 0; i <= 100; i++) {
  let data = {};
  const date = new Date(faker.date.past());
  const newdate =
    date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear();
  data.id = faker.fake("{{random.uuid}}");
  data.name = faker.fake("{{name.findName}}");
  data.age = faker.fake("{{random.number(60)}}");
  data.office = faker.fake("{{address.country}}");
  data.position = faker.fake("{{name.jobTitle}}");
  data.salary = `$` + faker.finance.amount();
  data.startdate = newdate;
  tableData.push(data);
}

const generateTableData = () => {
  if (!fs.existsSync(process.cwd() + "/src/components/table/tabledata")) {
    fs.mkdirSync(process.cwd() + "/src/components/table/tabledata");
  }

  const tabledataDir = process.cwd() + "/src/components/table/tabledata";

  if (fs.statSync(tabledataDir).isDirectory()) {
    const stringyfieldData = JSON.stringify(tableData);
    fs.writeFileSync(
      process.cwd() + `/src/components/table/tabledata/tabledata.json`,
      stringyfieldData
    );
  }
};
generateTableData();
