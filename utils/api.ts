import allCase from '../data/all.json';
import websiteCase from '../data/website.json';
import appCase from '../data/app.json';
import wechatCase from '../data/wechat.json';

export const getCasesService = ( caseId: string) => {
    const currentCase:any = {
        0: allCase,
        1: websiteCase,
        2: appCase,
        3: wechatCase,
    }

    return currentCase[caseId]||allCase;
}