import { getBillionaireById } from "@/lib/api";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

interface PageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const billionaire = await getBillionaireById(params.id);
  return {
    title: `${billionaire.name} - 조만장자 정보`,
    description: `${billionaire.name}의 상세 정보와 재산 현황`,
  };
}

export default async function BillionaireDetailPage({ params }: PageProps) {
  const billionaire = await getBillionaireById(params.id);

  // 숫자 형식화 (예: 1,000,000,000)
  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('ko-KR').format(num);
  };

  return (
    <div className="container mx-auto py-8 px-6">
      <Link href="/" className="text-blue-500 hover:underline mb-6 inline-block">
        ← 목록으로 돌아가기
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* 좌측 - 이미지와 기본 정보 */}
        <div className="lg:col-span-1">
          <Card className="overflow-hidden">
            <div className="relative w-full h-[400px]">
              {billionaire.squareImage ? (
                <Image
                  src={billionaire.squareImage}
                  alt={billionaire.name}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500 text-lg">이미지 없음</span>
                </div>
              )}
            </div>
            <CardContent className="p-6">
              <h1 className="text-3xl font-bold mb-2">{billionaire.name}</h1>
              <div className="flex flex-col gap-4 mt-6">
                <div>
                  <span className="font-bold text-gray-600">국가: </span>
                  <span>{billionaire.country}</span>
                </div>
                <div>
                  <span className="font-bold text-gray-600">순자산: </span>
                  <span className="text-xl">${formatNumber(billionaire.netWorth)}M</span>
                </div>
                <div>
                  <span className="font-bold text-gray-600">산업: </span>
                  <span>{billionaire.industries.join(', ')}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 우측 - 상세 정보 */}
        <div className="lg:col-span-2">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>소개</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg mb-4">{billionaire.bio}</p>
              <p className="whitespace-pre-line">{billionaire.about}</p>
            </CardContent>
          </Card>

          {billionaire.financialAssets && billionaire.financialAssets.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle>주요 자산</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="text-left p-3 border">회사명</th>
                        <th className="text-left p-3 border">티커</th>
                        <th className="text-left p-3 border">거래소</th>
                        <th className="text-right p-3 border">보유 주식 수</th>
                        <th className="text-right p-3 border">주가</th>
                      </tr>
                    </thead>
                    <tbody>
                      {billionaire.financialAssets.map((asset, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="p-3 border">{asset.companyName}</td>
                          <td className="p-3 border">{asset.ticker}</td>
                          <td className="p-3 border">{asset.exchange}</td>
                          <td className="p-3 border text-right">{formatNumber(asset.numberOfShares)}</td>
                          <td className="p-3 border text-right">${formatNumber(asset.sharePrice)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
} 