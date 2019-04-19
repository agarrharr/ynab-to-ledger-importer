# ynab-to-ledger-importer

This is a work in progress. It should import transactions from ynab into a ledger-cli file.

## Running

Create a `.env` file with the following variables (replace with the real values).

```
YNAB_PERSONAL_ACCESS_TOKEN=123lkrrj9ds8afvio1233908dsvaj2308uasdvji9w2732iefj2302039rutp0p9
```

Then run:

```
npm install
npm start
```

## It should

- Import transactions from YNAB (cleared and uncleared)
- Use some immutable data from YNAB (id or import_id) and hash it as a YNAB_UUID tag
- Read existing ledger file with -f flag and check for duplicates (with the YNAB_UUD)
- Output ledger-cli formatted data using standard out

## Questions

- What if the category changed in YNAB or if the note, or payee changed?
