interface Option {
    el: string,
    data: object,
    methods?: object
}

interface Component {
    render: Function
}

interface ListItem {
    title: string,
    subtitle: string
}

class Topic implements Component {

    constructor(option: Option) {
        const target = document.querySelector(option.el)
        target.innerHTML = this.render(option.data)
    }

    createListItems(items: ListItem[]) {
        let listItems = ''
        for(let item of items) {
            listItems += `<li class="topic-name">
                <a href="#">${item.title}</a>
                <p class="topic-subtitle">${item.subtitle}</p>
            </li>`
        }
        return listItems
    }

    render(data) {
        const items = data.items
        return `<ul>${this.createListItems(items)}</ul>`
    }
}

new Topic({
    el: '.topic',
    data: {
        items: [
            {title: '新冠肺炎预防指南', subtitle: '5111.6万次浏览'},
            {title: '当长辈熟练使用手机后', subtitle: '154.5万次浏览'},
            {title: '适合两个人一起玩的游戏', subtitle: '13.7万次浏览'},
            {title: '和新冠肺炎疫情有关的记忆', subtitle: '1546.7万次浏览'},
            {title: '抗疫情时期的生活智慧', subtitle: '119.2万次浏览'},
            {title: '我的文化生活消费观', subtitle: '55.9万次浏览'}
        ]
    }
})