import zbll_map from "@/assets/zbll_map.json"

// returns how many zbll cases are there under this oll
export const countZbllsInOll = (oll)=>{
  let result = 0;
  for (let coll in zbll_map[oll]) {
    result += countZbllsInColl(oll, coll);
  }
  return result;
}

// returns how many zbll cases are there under this oll
export const countZbllsInColl = (oll, coll)=>{
  return Object.keys(zbll_map[oll][coll]).length;
}

export const isZbllSelected = (select_map, oll, coll, zbll) => {
  return oll in select_map
    && coll in select_map[oll]
    && select_map[oll][coll].has(zbll);
}

export const numZbllsInCollSelected = (select_map, oll, coll) => {
  return (oll in select_map && coll in select_map[oll]) ? select_map[oll][coll].size : 0;
}

export const numZbllsInOllSelected = (select_map, oll) => {
  if (!(oll in select_map)) {
    return 0;
  }
  let result = 0;

  for (let coll in select_map[oll]) {
    result += numZbllsInCollSelected(select_map, oll, coll);
  }

  return result;
}

