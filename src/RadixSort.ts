/**
 * @Author XIAO-LI-PIN
 * @Description 基數排列
 * @Date 2021/6/27 9:21 下午
 * @Version 1.0
 */
export default class RadixSort {

    static numberSorting(data: Array<number>, maxNumber?: number) {
        let MAX_LENGTH: number;
        if (!maxNumber) {
            let index = this.getMaxNumberIndex(data);
            MAX_LENGTH = String(data[index]).length;
        } else {
            MAX_LENGTH = String(maxNumber).length;
        }

        let temp = 0;
        let radix = 1;//1,10,100
        // (131 / 10) % 10 = 13/10  = 3 :
        while (temp < MAX_LENGTH) {
            //初始化桶子
            let buckets: Map<number, Array<number>> = new Map<number, Array<number>>();

            for (let num of data) {
                let key = parseInt( String((num / radix) % 10));
                if (buckets.has(key)) {
                    buckets.get(key).push(num);
                } else {
                    buckets.set(key, new Array<number>());
                    buckets.get(key).push(num);
                }
            }
            radix *= 10;
            let dataIndex : number= 0;
            for (let i = 0; i <= 9; i++) {
                if(buckets.has(i)){
                    for(let j = 0 ; j < buckets.get(i).length ; j++){
                        data[dataIndex] = buckets.get(i)[j];
                        dataIndex++
                    }
                }
            }
            console.log(data)
            temp++;
            buckets = null;
        }
    }


    /**
     * 獲取該陣列內最大長度的數字
     * @param {Array<number>} data - 要尋訪的陣列
     * @returns {number} - 返回該陣列內最大長度的index
     */
    public static getMaxNumberIndex(data: Array<number>): number {

        let maxNumIndex: number = 0;
        let maxNum: number = 0;
        for (let i = 0; i < data.length; i++) {
            let num: number;
            if (data[i] < 0) {
                num = data[i] * -1;
            } else {
                num = data[i];
            }

            if (maxNum < num) {
                maxNum = num;
                maxNumIndex = i;
            }
        }
        return maxNumIndex;
    }
}