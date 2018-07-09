require('dotenv').config();
const ynab = require("ynab");

const ynabAccessToken = process.env.YNAB_PERSONAL_ACCESS_TOKEN;
const ynabAPI = new ynab.API(ynabAccessToken);

(async function() {
  const budgetsResponse = await ynabAPI.budgets.getBudgets();
  const budgets = budgetsResponse.data.budgets;
  for (let budget of budgets) {
    console.log(`Budget Name: ${budget.name}`);
  }
})();
