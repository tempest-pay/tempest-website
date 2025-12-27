'use client';
import { Container } from "./Container";
import { useMemo, useState } from "react";

export function Calculator() {
  const [txPerYear, setTxPerYear] = useState<number>(1000);
  const [avgAmount, setAvgAmount] = useState<number>(80);
  const [bankFeeBps, setBankFeeBps] = useState<number>(19);
  const [stablecoinPerTx, setStablecoinPerTx] = useState<number>(0.18);
  const [scPurchaseBps, setScPurchaseBps] = useState<number>(20);
  const [scSalesBps, setScSalesBps] = useState<number>(2);

  const totals = useMemo(() => {
    const bankAnnual = txPerYear * avgAmount * (bankFeeBps / 10000);
    const stablecoinAnnual = txPerYear * stablecoinPerTx;
    const savings = Math.max(bankAnnual - stablecoinAnnual, 0);
    const savingsPct = bankAnnual > 0 ? (savings / bankAnnual) * 100 : 0;
    const breakevenBps = stablecoinAnnual > 0 ? ((stablecoinAnnual / (txPerYear * avgAmount)) * 10000) : 0;
    return { bankAnnual, stablecoinAnnual, savings, savingsPct, breakevenBps };
  }, [txPerYear, avgAmount, bankFeeBps, stablecoinPerTx]);

  return (
    <section id="calculator" className="pt-16 pb-12 md:pt-24 md:pb-16">
      <Container>
        <div className="grid gap-6 lg:grid-cols-[1fr,1.1fr]">
          <div>
            <h3 className="text-gradient text-sm font-semibold">Calculate Your Savings</h3>
            <p className="mt-2 text-sm text-white/65">
              Input your payment activity to see how much you could save by moving from bank transfers to stablecoin payments.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <label className="block">
                <div className="text-[12px] text-white/60">Tx / year</div>
                <input
                  className="mt-1 w-full rounded-md border border-white/15 bg-white/5 px-3 py-2 text-sm outline-none ring-0 placeholder:text-white/35"
                  type="number"
                  value={txPerYear}
                  onChange={(e) => setTxPerYear(Number(e.target.value || 0))}
                />
              </label>
              <label className="block">
                <div className="text-[12px] text-white/60">Avg amount ($)</div>
                <input
                  className="mt-1 w-full rounded-md border border-white/15 bg-white/5 px-3 py-2 text-sm outline-none"
                  type="number"
                  value={avgAmount}
                  onChange={(e) => setAvgAmount(Number(e.target.value || 0))}
                />
              </label>
              <label className="block">
                <div className="text-[12px] text-white/60">SC purchase (bps)</div>
                <input
                  className="mt-1 w-full rounded-md border border-white/15 bg-white/5 px-3 py-2 text-sm outline-none"
                  type="number"
                  value={scPurchaseBps}
                  onChange={(e) => setScPurchaseBps(Number(e.target.value || 0))}
                />
              </label>
              <label className="block">
                <div className="text-[12px] text-white/60">SC $ / tx</div>
                <input
                  className="mt-1 w-full rounded-md border border-white/15 bg-white/5 px-3 py-2 text-sm outline-none"
                  type="number"
                  step="0.01"
                  value={stablecoinPerTx}
                  onChange={(e) => setStablecoinPerTx(Number(e.target.value || 0))}
                />
              </label>
              <label className="block">
                <div className="text-[12px] text-white/60">Bank $ / tx</div>
                <input
                  className="mt-1 w-full rounded-md border border-white/15 bg-white/5 px-3 py-2 text-sm outline-none"
                  type="number"
                  value={bankFeeBps}
                  onChange={(e) => setBankFeeBps(Number(e.target.value || 0))}
                />
              </label>
              <label className="block">
                <div className="text-[12px] text-white/60">SC sales (bps)</div>
                <input
                  className="mt-1 w-full rounded-md border border-white/15 bg-white/5 px-3 py-2 text-sm outline-none"
                  type="number"
                  value={scSalesBps}
                  onChange={(e) => setScSalesBps(Number(e.target.value || 0))}
                />
              </label>
            </div>
          </div>

          <div className="rounded-2xl border border-white/12 bg-white/[0.03] p-6">
            <div className="text-center">
              <div className="text-[12px] text-white/60">Savings</div>
              <div className="mt-1 text-emerald-300 text-lg font-semibold">
                ${savingsFormat(totals.savings)} ({totals.savingsPct.toFixed(1)}%)
              </div>
              <div className="mt-1 text-[12px] text-white/60">
                Breakeven purchase bps (given SC $/tx){" "}
                <span className="text-white/75">{totals.breakevenBps.toFixed(2)} bps</span>
              </div>
            </div>

            <div className="mt-6 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
              <div>
                <div className="text-white/60">Total bank (annual)</div>
                <div className="mt-1 font-medium">${savingsFormat(totals.bankAnnual)}</div>
              </div>
              <div>
                <div className="text-white/60">Stablecoin per tx</div>
                <div className="mt-1 font-medium">${stablecoinPerTx.toFixed(2)}</div>
              </div>
              <div>
                <div className="text-white/60">Total stablecoin (annual)</div>
                <div className="mt-1 font-medium">${savingsFormat(totals.stablecoinAnnual)}</div>
              </div>
              <div>
                <div className="text-white/60">Bank per tx</div>
                <div className="mt-1 font-medium">${((avgAmount * bankFeeBps) / 10000).toFixed(2)}</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function savingsFormat(n: number): string {
  return n.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

