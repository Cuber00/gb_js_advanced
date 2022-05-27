const goods = [
    { title: 'Shirt', price: 150 },
    { title: 'Socks', price: 50 },
    { title: 'Jasket', price: 350 },
    { title: 'Shoes', price: 250 },
];



class GoodsItem {
    constructor({title = "", price = 0}){
        this.title = title;
        this.price = price;
    }
    render() {
        return `
            <div class="goods-item">
                <h3>${this.title}</h3>
                <p>${this.price}</p>
            </div>
        `
    }
}

class GoodsList{
    fetchData(){
        this.list = goods;
    }
    getCount(){
        return this.list.reduce((sum, item) => sum + item.price, 0)
    }
    render(){
        const goodList = this.list.map(item => {
            const goodsItem = new GoodsItem(item);
            return goodsItem.render();
        }).join(" ");
        document.querySelector('.goods-list').innerHTML = goodList;
    }
}

const goodsList = new GoodsList()

goodsList.fetchData();
goodsList.render();
console.log(goodsList.getCount())
