import {useEffect} from 'react';

const useEffectOnFirstRender = useEffectBody => useEffect(useEffectBody, []);

export default useEffectOnFirstRender;