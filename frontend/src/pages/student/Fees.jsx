import { useEffect, useMemo, useState } from "react";
import api from "../../api";
import "./Fees.css";

function Fees() {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadFees();
  }, []);

  const loadFees = async () => {
    try {
      const res = await api.get("/student/fees");
      setPayments(Array.isArray(res.data) ? res.data : []);
    } catch (err) {
      console.error("Fee loading error:", err);
    } finally {
      setLoading(false);
    }
  };

  const total = useMemo(
    () =>
      payments.reduce(
        (sum, payment) => sum + Number(payment.amount || 0),
        0
      ),
    [payments]
  );

  const types = useMemo(() => {
    const result = {};

    payments.forEach((payment) => {
      const type = payment.type || "OTHER";

      result[type] =
        (result[type] || 0) + Number(payment.amount || 0);
    });

    return result;
  }, [payments]);

  /* =====================================================
     DOWNLOAD RECEIPT
  ===================================================== */

  const downloadReceipt = (payment) => {
    const receiptWindow = window.open("", "_blank");

    if (!receiptWindow) {
      alert("Please allow pop-ups to download the receipt.");
      return;
    }

    const amount = Number(payment.amount || 0);

    const date = payment.date
      ? new Date(payment.date).toLocaleDateString("en-IN")
      : "—";

    receiptWindow.document.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Fee Receipt - ${payment.receiptNo || ""}</title>

        <style>

          * {
            box-sizing: border-box;
          }

          body {
            margin: 0;
            padding: 30px;
            background: #f3f4f6;
            font-family: Arial, Helvetica, sans-serif;
            color: #111827;
          }

          .receipt {
            width: 760px;
            max-width: 100%;
            margin: 0 auto;
            background: #ffffff;
            border: 1px solid #d1d5db;
            padding: 35px;
          }

          .school-header {
            text-align: center;
            border-bottom: 2px solid #111827;
            padding-bottom: 20px;
            margin-bottom: 22px;
          }

          .school-header h1 {
            margin: 0;
            font-size: 27px;
            color: #111827;
            text-transform: uppercase;
          }

          .school-header p {
            margin: 7px 0 0;
            font-size: 13px;
            color: #4b5563;
          }

          .receipt-title {
            text-align: center;
            margin-bottom: 24px;
          }

          .receipt-title h2 {
            display: inline-block;
            margin: 0;
            padding: 7px 22px;
            border: 1px solid #111827;
            font-size: 17px;
            text-transform: uppercase;
          }

          .receipt-meta {
            display: flex;
            justify-content: space-between;
            gap: 20px;
            margin-bottom: 22px;
            font-size: 13px;
          }

          .meta-box {
            flex: 1;
          }

          .meta-box strong {
            display: block;
            margin-bottom: 5px;
            color: #374151;
            font-size: 11px;
            text-transform: uppercase;
          }

          .meta-box span {
            font-size: 14px;
            font-weight: 600;
          }

          table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 15px;
          }

          th,
          td {
            border: 1px solid #d1d5db;
            padding: 12px;
            text-align: left;
            font-size: 13px;
          }

          th {
            background: #f3f4f6;
            font-weight: 700;
          }

          .amount {
            text-align: right;
            font-weight: 700;
          }

          .total-row td {
            font-size: 15px;
            font-weight: 700;
            background: #f9fafb;
          }

          .payment-info {
            margin-top: 22px;
            border: 1px solid #d1d5db;
            padding: 14px;
          }

          .payment-info p {
            margin: 5px 0;
            font-size: 13px;
          }

          .footer {
            margin-top: 55px;
            display: flex;
            justify-content: space-between;
            font-size: 12px;
          }

          .signature {
            width: 180px;
            text-align: center;
            border-top: 1px solid #111827;
            padding-top: 7px;
          }

          .print-button {
            display: block;
            margin: 20px auto;
            padding: 10px 25px;
            border: 0;
            border-radius: 6px;
            background: #111827;
            color: white;
            cursor: pointer;
            font-size: 14px;
          }

          @media print {

            body {
              padding: 0;
              background: #ffffff;
            }

            .receipt {
              width: 100%;
              border: 0;
              padding: 20px;
            }

            .print-button {
              display: none;
            }

          }

        </style>
      </head>

      <body>

        <button
          class="print-button"
          onclick="window.print()"
        >
          Download / Save as PDF
        </button>

        <div class="receipt">

          <div class="school-header">
            <h1>Vidyapeeth Martinganj</h1>
            <p>School Management System</p>
          </div>

          <div class="receipt-title">
            <h2>Fee Receipt</h2>
          </div>

          <div class="receipt-meta">

            <div class="meta-box">
              <strong>Receipt No.</strong>
              <span>${payment.receiptNo || "—"}</span>
            </div>

            <div class="meta-box">
              <strong>Date</strong>
              <span>${date}</span>
            </div>

          </div>

          <table>

            <thead>
              <tr>
                <th>Description</th>
                <th>Payment Type</th>
                <th>Payment Method</th>
                <th class="amount">Amount</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td>
                  ${payment.description || "School Fee Payment"}
                </td>

                <td>
                  ${payment.type || "OTHER"}
                </td>

                <td>
                  ${payment.method || "—"}
                </td>

                <td class="amount">
                  ₹${amount.toLocaleString("en-IN")}
                </td>
              </tr>

              <tr class="total-row">
                <td colspan="3">
                  Total Paid
                </td>

                <td class="amount">
                  ₹${amount.toLocaleString("en-IN")}
                </td>
              </tr>

            </tbody>

          </table>

          <div class="payment-info">

            <p>
              <strong>Payment Status:</strong>
              PAID
            </p>

            <p>
              <strong>Amount:</strong>
              ₹${amount.toLocaleString("en-IN")}
            </p>

          </div>

          <div class="footer">

            <div>
              Thank you for your payment.
            </div>

            <div class="signature">
              Authorized Signature
            </div>

          </div>

        </div>

        <script>
          window.onload = function() {
            setTimeout(function() {
              window.print();
            }, 500);
          };
        </script>

      </body>
      </html>
    `);

    receiptWindow.document.close();
  };

  return (
    <div className="fees-page">

      {/* =================================================
          HEADER
      ================================================= */}

      <div className="fees-page-header">

        <div>
          <span className="fees-eyebrow">
            FINANCE
          </span>

          <h1>
            Fees & Payments
          </h1>

          <p>
            View your school fee payment history.
          </p>
        </div>

        <button
          type="button"
          className="fees-refresh-btn"
          onClick={loadFees}
        >
          ↻ Refresh
        </button>

      </div>

      {/* =================================================
          STATISTICS
      ================================================= */}

      <div className="fees-stat-grid">

        <div className="fees-stat-card">

          <div className="fees-stat-icon">
            ₹
          </div>

          <div>
            <span>Total Paid</span>

            <strong>
              ₹{total.toLocaleString("en-IN")}
            </strong>
          </div>

        </div>

        <div className="fees-stat-card">

          <div className="fees-stat-icon">
            #
          </div>

          <div>
            <span>Transactions</span>

            <strong>
              {payments.length}
            </strong>
          </div>

        </div>

        <div className="fees-stat-card">

          <div className="fees-stat-icon">
            T
          </div>

          <div>
            <span>Tuition</span>

            <strong>
              ₹{(types.TUITION || 0).toLocaleString("en-IN")}
            </strong>
          </div>

        </div>

        <div className="fees-stat-card">

          <div className="fees-stat-icon">
            A
          </div>

          <div>
            <span>Admission</span>

            <strong>
              ₹{(types.ADMISSION || 0).toLocaleString("en-IN")}
            </strong>
          </div>

        </div>

      </div>

      {/* =================================================
          PAYMENT HISTORY
      ================================================= */}

      <section className="fees-card">

        <div className="fees-card-header">

          <div>
            <h3>
              Payment History
            </h3>

            <p>
              All recorded fee payments
            </p>
          </div>

        </div>

        {loading ? (

          <div className="fees-loading">
            Loading payments...
          </div>

        ) : payments.length === 0 ? (

          <div className="fees-empty">
            No payment records found.
          </div>

        ) : (

          <div className="fees-table-wrap">

            <table className="fees-table">

              <thead>

                <tr>
                  <th>Receipt No.</th>
                  <th>Type</th>
                  <th>Amount</th>
                  <th>Method</th>
                  <th>Date</th>
                  <th>Description</th>
                  <th>Receipt</th>
                </tr>

              </thead>

              <tbody>

                {payments.map((payment) => (

                  <tr key={payment._id}>

                    <td>
                      <strong>
                        {payment.receiptNo || "—"}
                      </strong>
                    </td>

                    <td>
                      <span className="fees-type-badge">
                        {payment.type || "OTHER"}
                      </span>
                    </td>

                    <td>
                      <strong>
                        ₹
                        {Number(
                          payment.amount || 0
                        ).toLocaleString("en-IN")}
                      </strong>
                    </td>

                    <td>
                      {payment.method || "—"}
                    </td>

                    <td>
                      {payment.date
                        ? new Date(
                            payment.date
                          ).toLocaleDateString("en-IN")
                        : "—"}
                    </td>

                    <td>
                      {payment.description || "—"}
                    </td>

                    <td>

                      <button
                        type="button"
                        className="fees-receipt-btn"
                        onClick={() =>
                          downloadReceipt(payment)
                        }
                      >
                        ↓ Receipt
                      </button>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        )}

      </section>

    </div>
  );
}

export default Fees;