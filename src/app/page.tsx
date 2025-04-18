import { getAllBillionaires } from "@/lib/api";
import BillionaireCard from "@/components/BillionaireCard";

export default async function Home() {
  const billionaires = await getAllBillionaires();

  return (
    <div className="container mx-auto py-8 px-6">
      <h1 className="text-3xl font-bold mb-8">세계 조만장자 목록</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {billionaires.map((billionaire) => (
          <BillionaireCard key={billionaire.id} billionaire={billionaire} />
        ))}
      </div>
    </div>
  );
}
