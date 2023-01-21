import {getMapInfos} from "./map-handler";

const slugger = (text: string) => {
    return text.toLocaleLowerCase().replaceAll(" ", "-")
}

const splicer = <T>(arr: T[] = [], count: number) => {
    let list = [...arr];
    const ceil = Math.ceil(list?.length / count);
    let res = [];
    for(let i = 0; i < ceil; i++) {
        res.push(list.splice(0, count));
    }
    return res;
}

export {
    getMapInfos,
    slugger,
    splicer
}
