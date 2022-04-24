import { useDispatch } from 'react-redux';
import { Dispatch } from '@/store/index';

export const useTypedDispatch = () => useDispatch<Dispatch>();
