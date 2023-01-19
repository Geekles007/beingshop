export const getMapInfos = <T, V>(map: Map<T, V>, key: "keys" | "values") => {
    return key === "keys" ? Array.from(map.keys()) ?? [] : Array.from(map.values()) ?? []
}
