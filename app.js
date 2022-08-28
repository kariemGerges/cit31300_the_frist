
new Vue({
    el: "#Product-Store",
    data:{
        products:[
            {name:"Wallet",
                price:"$7099.99",
                brand:"Montblanc",
                img:"https://cdn-fnknc.nitrocdn.com/jwqHRGAzpUgGskUSHlppNQzwuXgXIKwg/assets/static/optimized/rev-07ec01f/wp-content/uploads/2022/07/Montblanc_Meisterstuck-4810-Textured-Leather.jpg",
            },
            {name:"Cologne",
                price:"$418.99",
                brand:"Ralph Lauren",
                img:"https://assets.vogue.com/photos/6054ce7c3d9f1094613214fa/master/w_1280,c_limit/slide_15.jpg",
                
            },
            {name:"Shirt",
                price:"$2000.00",
                brand:"Gucci",
                img:"https://media.list.ly/production/183813/1226680/1226680-gucci_600px.jpeg?ver=0932026943",

            }
        ],
        customers:[],
        form:{
            fName:"",
            lName:"",
            email:"",
            address:"",
            phone:"",
            notes:"",
        },
        methods: {
            regsister: function(){
                if (this.form.fName===""
                || this.form.lName===""
                || this.form.email===""
                || this.form.address===""
                || this.form.phone===""){
                    alert("one or more fields are missing")
                }else{
                    this.customers.push(this.form);
                    this.form={
                        fName:"",
                        lName:"",
                        email:"",
                        address:"",
                        phone:"",
                        notes:"",
                    }
                }
            },
            newPage: function () {
                window.open("https://www.w3schools.com");
            }
        }
    }
})