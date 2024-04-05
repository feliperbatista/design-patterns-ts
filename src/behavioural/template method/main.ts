import { resolve } from 'path';
import { CustomerDataParserTxt } from './customer-data-parser-txt';
import { CustomerDataParserJson } from './customer-data-parser-json';

async function run() {
  const filePathTxt = resolve(__dirname, 'files', 'customer.txt');
  const customerDataParsetTxt = new CustomerDataParserTxt(filePathTxt);
  await customerDataParsetTxt.fixCustomerData();
  console.log(customerDataParsetTxt.customerData);

  console.log();

  const filePathJson = resolve(__dirname, 'files', 'customer.json');
  const customerDataParsetJson = new CustomerDataParserJson(filePathJson);
  await customerDataParsetJson.fixCustomerData();
  console.log(customerDataParsetJson.customerData);
}

run();
