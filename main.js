function renderMainMenu() {
	const menuName = [ '读书', '电影', '音乐', '同城', '小组', '阅读', 'FM', '时间', '豆品' ];
	const mainMenu = document.querySelector('.main-menu');

	let menuItems = '';
	menuName.forEach((item) => {
		menuItems += `<li><a href="#">${item}</a></li>`;
	});

	mainMenu.innerHTML = menuItems;
}

function renderTopics() {
	const topicItems = [
		{
			title: '新冠肺炎预防指南',
			subtitle: '5111.6万次浏览'
		},
		{
			title: '当长辈熟练使用手机后',
			subtitle: '154.5万次浏览'
		},
		{
			title: '适合两个人一起玩的游戏',
			subtitle: '13.7万次浏览'
		},
		{
			title: '和新冠肺炎疫情有关的记忆',
			subtitle: '1546.7万次浏览'
		},
		{
			title: '抗疫情时期的生活智慧',
			subtitle: '119.2万次浏览'
		},
		{
			title: '我的文化生活消费观',
			subtitle: '55.9万次浏览'
		}
	];

	const topics = document.querySelector('.topics');
	topics.innerHTML = `<ul>${createLi(topicItems)}</ul>`;

	function createLi(items) {
		let listItems = '';
		topicItems.forEach((item) => {
			listItems += `<li class="topic-name"><a href="#">${item.title}</a><p class="topic-subtitle">${item.subtitle}</p>`;
		});
		return listItems;
	}
}

function renderTimeList() {
	const timeLists = [
		{
			title: '电影产业破壁课——13小时重塑电影世界观',
			type: '视频专栏',
			id: 1
		},
		{
			title: '不准无聊！精品大师课免费放送',
			type: '音频专栏',
			id: 2
		},
		{
			title: '懂得这些再去穿越——古代天文学里的星空密码',
			type: '音频专栏',
			id: 3
		},
		{
			title: '收获一生之书——马家辉解读影响人生的24部文学经典',
			type: '音频专栏',
			id: 4
		},
		{
			title: '我同世界交流的方式——顶级纪录片导演创作分享课',
			type: '音频专栏',
			id: 5
		},
		{
			title: '掌控人生剧本——12堂改变命运的思维课',
			type: '音频专栏',
			id: 6
		},
		{
			title: '如何读懂美——赤木明登工艺课堂',
			type: '视频专栏',
			id: 7
		},
		{
			title: '李安解读立体电影',
			type: '视频专栏',
			id: 8
		},
		{
			title: '如何读懂美杨超教你用导演思维看电影——十大专题破解电影密码——赤木明登工艺课堂',
			type: '视频专栏',
			id: 9
		},
		{
			title: '好听的声音会跳舞——季冠霖的声音形象课',
			type: '视频专栏',
			id: 10
		}
	];

	const timeList = document.querySelector('.time-list');
	timeList.innerHTML = `<ul>${createLi(timeLists)}</ul>`;

	function createLi(lists) {
		let itemLists = '';
		lists.forEach((item) => {
			itemLists += `<li><a href="#" class="time-list-cover"><img src="image/time list Album/${item.id}.jpg" alt="time list album"></a><div class="time-list-title"><a href="#">${item.title}</a></div><span class="type">${item.type}</span>`;
		});
		return itemLists;
	}
}

function renderMovie() {
	renderSideLinks();
	renderMovieList();
	renderSideTags();
	renderSideHotMovies();
}

function renderSideLinks() {
	const linkItems = [ '影讯&购票', '选电影', '电视剧', '排行榜', '分类', '影评', '预告片', '问答' ];

	const sidenavLinks = document.querySelector('.sidenav-links');
	sidenavLinks.innerHTML = `<ul>${createLi(linkItems)}</ul>`;

	function createLi(items) {
		let code = '';
		items.forEach((item) => {
			code += `<li><a href="#">${item}</a></li>`;
		});
		return code;
	}
}

function renderMovieList() {
	const movies = [
		{
			title: '叶问4：完结篇...',
			id: 1,
			rating: 7.1
		}
	];

	const movieList = document.querySelector('.movie-list');
	movieList.innerHTML = `<ul>${createLi(movies)}</ul>`;

	function createLi(movies) {
		let code = '';

		movies.forEach((movie) => {
			code += `
            <li>
            <div class="movie-poster">
                <img src="image/movie posters/${movie.id}.webp" alt="movie poster">
            </div>
            <div class="movie-title">
                <a href="#">${movie.title}</a>
            </div>
            <div class="rating">
                <img src="image/movie posters/rating_cut.png" alt="movie rating">
                <i>${movie.rating}</i>
            </div>

            <a href="#" class="ticket-btn">选座购票</a>
        </li>`;
		});
		return code;
	}
}

function renderSideTags() {
	const tags = [
		'爱情',
		'剧情',
		'喜剧',
		'动画',
		'科幻',
		'经典',
		'动作',
		'悬疑',
		'犯罪',
		'青春',
		'搞笑',
		'文艺',
		'惊悚',
		'励志',
		'纪录片',
		'黑色幽默',
		'战争',
		'恐怖',
		'美国',
		'日本',
		'香港',
		'韩国',
		'中国',
		'英国',
		'中国大陆',
		'法国',
		'台湾',
		'印度'
	];

	const movieTags = document.querySelector('.tags');
	movieTags.innerHTML = `<ul>${createTagsLi(tags)}</ul>`;

	function createTagsLi(tags) {
		let code = '';
		tags.forEach((tag) => {
			code += `<li><a href="#">${tag}</a></li>`;
		});
		return code;
	}
}

function renderSideHotMovies() {
	const items = [ '1917', '寄生虫', '小妇人', '囧妈', '乔乔的异想世界', '小丑', '阳光普照', '半个喜剧', '爱尔兰人', '婚姻故事' ];

	const hotMovie = document.querySelector('.hotmovie');
	hotMovie.innerHTML = `<ol>${createLi(items)}</ol>`;

	function createLi(items) {
		let code = '';
		items.forEach((item) => {
			code += `<li>
            <a href="#">${item}</a>
        </li>`;
		});
		return code;
	}
}

function render() {
	renderMainMenu();
	renderTopics();
	renderTimeList();
	renderMovie();
}

render();
