new Vue({
    el: '#vue-app',
    data: {
        name:"测试元",
        age: 25,
        a:0,
        b:0,
    },
    methods: {
        addtoA:function () {
            console.log("Add to A");
            return this.a+this.age;
        },
        addtoB:function () {
            console.log("Add to B");
            return this.b+this.age;
        }
    },
    computed:{
        c_addtoA:function () {
            console.log("computed 属性计算Add to A");
            return this.a+this.age;
        },
        c_addtoB:function () {
            console.log("computed 属性计算Add to B");
            return this.b+this.age;
        }
    }
});
