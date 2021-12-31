import { Workbook } from "exceljs";

type BufferSource = ArrayBufferView | ArrayBuffer;
type BlobPart = string | BufferSource | Blob;
type Params = {
  excelData: Record<string, string | number | boolean>[],
  tableTitleKeys: string[],
  valueKeys: string[],
  updateDownError: (value: boolean) => void,
  excelName: string,
}
  // 导出excel
  export default function excelsExport(params: Params): void {
    const {excelData, tableTitleKeys, valueKeys} = params;
    const { updateDownError } = params;
    if (excelData.length === 0) {
      updateDownError(true);
      setTimeout(() => (updateDownError(false)), 1000);
      return;
    }
    // 初始化 创建工作簿
    const workbook = new Workbook();
    // 设置工作簿属性
    workbook.creator = "admin";
    workbook.lastModifiedBy = "admin";
    workbook.created = new Date();
    workbook.modified = new Date();
    // 添加工作表
    const sheet = workbook.addWorksheet("stock");
    // 设置标题
    sheet.columns = tableTitleKeys.map((i) => ({
      header: i.charAt(0).toUpperCase() + i.slice(1),
      key: i,
      width: 15,
      style: {
        alignment: {
          vertical: "middle",
          horizontal: "center",
        },
      },
    }));
    sheet.views = [
      { state: "frozen", ySplit: 1 }, // 冻结第一行
    ];
    sheet.getRow(1).font = {
      bold: true,
      size: 11,
      name: "Calibri",
    };
    // 设置表格内容
    excelData.map((i) => {
        const result: Record<string, string | number | boolean> = {};
        valueKeys.forEach((key) => {
          result[key] = i[key];
        });
        return result;
      })
      .forEach((i) => {
        const rowValues: (string | number | boolean)[] = [];
        valueKeys.forEach((key) => {
          rowValues.push(i[key]);
        });
        sheet.addRow(rowValues).font = {
          size: 11,
          name: "Calibri",
        };
      });

    sheet.addRow([]);
    sheet.autoFilter = "A1:H1";

    // 将二进制转为Excel并下载
    const writeFile = (fileName: string, details: BlobPart) => {
      const a = document.createElement("a");
      const blob = new Blob([details], { type: "text/plain" });
      a.download = fileName;
      a.href = URL.createObjectURL(blob);
      a.click();
    };

    // 将表格数据转为二进制
    workbook.xlsx.writeBuffer().then((buffer) => {
      writeFile(`${params.excelName}.xlsx`, buffer);
    });
  }