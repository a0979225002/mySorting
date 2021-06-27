import RadixSort from "../../src/RadixSort";

/**
 * @Author XIAO-LI-PIN
 * @Description 基數排序法 測試
 * @Date 2021/6/27 9:21 下午
 * @Version 1.0
 */
test("基數排序法",()=>{

    let radixSort = new RadixSort();

    let data :Array<number> = [1000,10,50,32,42,62,290,6201]

    RadixSort.numberSorting(data);

    console.log(data)
})