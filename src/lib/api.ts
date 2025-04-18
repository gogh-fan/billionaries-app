import { Billionaire } from './types';

const API_BASE_URL = 'https://billions-api.nomadcoders.workers.dev';

export async function getAllBillionaires(): Promise<Billionaire[]> {
  const response = await fetch(`${API_BASE_URL}/`, {cache: 'force-cache'});
  
  if (!response.ok) {
    throw new Error('억만장자 데이터를 가져오는데 실패했습니다.');
  }
  
  return response.json();
}

export async function getBillionaireById(id: string): Promise<Billionaire> {
  const response = await fetch(`${API_BASE_URL}/person/${id}`);
  
  if (!response.ok) {
    throw new Error(`ID: ${id}에 해당하는 억만장자 정보를 가져오는데 실패했습니다.`);
  }
  
  return response.json();
} 