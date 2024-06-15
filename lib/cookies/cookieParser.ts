// import { Cookie } from "@/lib/interfaces/cookies/Cookies";

export const cookieParser = async (str : string) : Promise<any | undefined> => {
    try {
        let reslut: any = new Object();
        const destructuredCookiesString = str.trim().split(';');
        for(let i = 0; i < destructuredCookiesString.length; i++){
            const keyvalueList = destructuredCookiesString[i].trim().split('=');
            if(i == 0 ){
                reslut['key'] = keyvalueList[0]?.trim();
                reslut['value'] = keyvalueList[1]?.trim();
            }else{
                reslut[`${keyvalueList[0]?.trim()}`] =  keyvalueList[1]?.trim();
            }
        }
        if(destructuredCookiesString.includes(' HttpOnly')){
            reslut['httpOnly'] = true;
        }
        const cookie: any = {
            key: reslut['key'],
            value: reslut['value'],
            httpOnly: reslut['httpOnly'],
            maxAge: Number(reslut['Max-Age']),
            sameSite: "Lax"
        } 
        return cookie;
    } catch (error) {
        console.log(error)
    }
};