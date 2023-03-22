# 使用rollup打包，修改了一些功能。


#### 添加了关于每日是否是休息和调班日，添加的数据接口。
calendar.setRest

如果不喜欢，可以源码修改。
构建项目中去dist/index.esm.js修改Rest 。
网页引入去dist/index.js修改Rest

## web构建工具使用:
`npm i yz-calendar`

```
import calendar from "yz-calendar";

var addrest = {
            "2021": {
                "xiu": ["0909", "0102", "0103", "0211", "0212", "0213", "0214", "0215", "0216", "0217", "0403", "0404", "0405", "0501", "0502", "0503", "0504", "0505", "0612", "0613", "0614", "0919", "0920", "0921", "1001", "1002", "1003", "1004", "1005", "1006", "1007"],
                "ban": ["0909", "0220", "0425", "0508", "0918", "0926", "1009"]
            }
        }

calendar.setRest = addrest

const today  =  calendar.solar2lunar(2021, 3, 21)

```


## 普通页面直接复制/dist.index.js

```
<script src="./dist/index.js"></script>
<script>
    var addrest = {
            "2021": {
                "xiu": ["0909", "0102", "0103", "0211", "0212", "0213", "0214", "0215", "0216", "0217", "0403", "0404", "0405", "0501", "0502", "0503", "0504", "0505", "0612", "0613", "0614", "0919", "0920", "0921", "1001", "1002", "1003", "1004", "1005", "1006", "1007"],
                "ban": ["0909", "0220", "0425", "0508", "0918", "0926", "1009"]
            }
        }
    calendar.setRest = addrest
    console.log(calendar.Rest);
    console.log(calendar.solar2lunar());
</script>

 ```

### calendar 所有的属性方法。

##### 这两个是最主要的方法，常用的，还有一个自定义休息与调休日

- solar2lunar(y: number, m: number, d: number)
    - 未传参获得当天，传入阳历年月日获得详细的公历、农历object信息
- lunar2sola(y: number, m: number, d: number, isLeapMonth: boolean)
    - 传入农历年月日以及传入的月份是否闰月获得详细的公历、农历object信息

- setRest= {} 
    - 赋值设置休息日与调休日
    - 格式为: ` {
        2023:{
            xiu:['0101'],
            ban:['0202,0203'] 
        } 
    }`

- lYearDays (y: number) 
    - 返回农历y年一整年的总天数
- leapMonth (y: number)
    - 返回农历y年闰月是哪个月；若y年没有闰月 则返回0
- leapDays (y: number)
    - 返回农历y年闰月的天数 若该年没有闰月则返回0
- monthDays(y: number, m: number)
    - 返回农历y年m月（非闰月）的总天数，计算m为闰月时的天数请使用leapDays方法
- toGanZhiYear(lYear: number)
    - 农历年份转换为干支纪年 lYear:农历年
- toGanZhi (offset: number)
    - 传入offset偏移量返回干支 offset：(y - 1900) * 12 + m + 12 公历年月
- toChinaMonth (m: number)
    - 传入农历数字月份返回汉语通俗表示法
- toChinaDay(d: number)
    - 传入农历日期数字返回汉字表示法
- solarDays (y: number, m: number)
    - 返回公历(!)y年m月的天数
- solarFirstWeek (y: number, m: number)
    - 返回公历(!)y年m月的第一天是星期几
- toAstro(cMonth: number, cDay: number)
    - 公历月、日判断所属星座
- getTerm (y: number, n: number)
    - 传入公历(!)y年获得该年第n个节气的公历日期
- getAnimal(y: number)
    - 年份转生肖[!仅能大致转换]  精确划分生肖分界线是“立春”
