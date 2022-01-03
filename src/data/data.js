const Books = [
    {
        id : 1,
        title : 'Confidence: Simple, Proven Methods to Manage Anxiety and Shyness, and Transform Your Personal and Professional Life',
        author : 'James W. Williams',
        price : 1.5,
        genres : ['health'],
        cover : 'https://books.google.com/books/publisher/content/images/frontcover/CWScDwAAQBAJ?fife=w200-h300',
        description : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis, rerum minima placeat dolorem illo vel soluta delectus earum enim molestiae quisquam rem, laborum sed veniam? Culpa ipsa itaque recusandae ipsum Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore esse aliquam sit at quasi quod, cupiditate, debitis libero, repellendus saepe explicabo dolor aut! Accusantium autem odio dolore mollitia, iure veniam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti adipisci quos non itaque, iure eum saepe accusamus, numquam harum quidem nam id eos tempore commodi fugit voluptatibus in! Debitis, commodi.'
    },
    {
        id : 2,
        title : 'Dilan: Dia adalah Dilanku Tahun 1990, Volume 1',
        author : 'Pidi Baiq',
        price : 2,
        genres : ['romance','teen'],
        cover : 'https://books.google.com/books/publisher/content/images/frontcover/U_-BBAAAQBAJ?fife=w200-h300',
        description : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis, rerum minima placeat dolorem illo vel soluta delectus earum enim molestiae quisquam rem, laborum sed veniam? Culpa ipsa itaque recusandae ipsum Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore esse aliquam sit at quasi quod, cupiditate, debitis libero, repellendus saepe explicabo dolor aut! Accusantium autem odio dolore mollitia, iure veniam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti adipisci quos non itaque, iure eum saepe accusamus, numquam harum quidem nam id eos tempore commodi fugit voluptatibus in! Debitis, commodi.'
    },
    {
        id : 3,
        title : 'Koala Kumal: [chapter 1]',
        author : 'Raditya Dika',
        price : 0.5,
        genres : ['comedy'],
        cover : 'https://books.google.com/books/publisher/content/images/frontcover/Uex1DQAAQBAJ?fife=w200-h300',
        description : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis, rerum minima placeat dolorem illo vel soluta delectus earum enim molestiae quisquam rem, laborum sed veniam? Culpa ipsa itaque recusandae ipsum Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore esse aliquam sit at quasi quod, cupiditate, debitis libero, repellendus saepe explicabo dolor aut! Accusantium autem odio dolore mollitia, iure veniam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti adipisci quos non itaque, iure eum saepe accusamus, numquam harum quidem nam id eos tempore commodi fugit voluptatibus in! Debitis, commodi.'
    },
    {
        id : 4,
        title : 'Trik Juara Mengatur Waktu',
        author : 'Zivanna Letisha',
        price : 5,
        genres : ['tips'],
        cover : 'https://books.google.com/books/publisher/content/images/frontcover/spI9DAAAQBAJ?fife=w200-h300',
        description : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis, rerum minima placeat dolorem illo vel soluta delectus earum enim molestiae quisquam rem, laborum sed veniam? Culpa ipsa itaque recusandae ipsum Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore esse aliquam sit at quasi quod, cupiditate, debitis libero, repellendus saepe explicabo dolor aut! Accusantium autem odio dolore mollitia, iure veniam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti adipisci quos non itaque, iure eum saepe accusamus, numquam harum quidem nam id eos tempore commodi fugit voluptatibus in! Debitis, commodi.'
    },
    {
        id : 5,
        title : 'Markesot Bertutur tentang Hakikat Hidup',
        author : 'Emha Ainun Nadjib',
        price : 0.5,
        genres : ['tips','life'],
        cover : 'https://books.google.com/books/publisher/content/images/frontcover/PTjKDgAAQBAJ?fife=w200-h300',
        description : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis, rerum minima placeat dolorem illo vel soluta delectus earum enim molestiae quisquam rem, laborum sed veniam? Culpa ipsa itaque recusandae ipsum Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore esse aliquam sit at quasi quod, cupiditate, debitis libero, repellendus saepe explicabo dolor aut! Accusantium autem odio dolore mollitia, iure veniam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti adipisci quos non itaque, iure eum saepe accusamus, numquam harum quidem nam id eos tempore commodi fugit voluptatibus in! Debitis, commodi.'
    },
    {
        id : 6,
        title : 'Steve Jobs',
        author : 'Walter Isaacson',
        price : 18.5,
        genres : ['Biography'],
        cover : 'https://books.google.com/books/content/images/frontcover/I6R8MXStPXgC?fife=w200-h300',
        description : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis, rerum minima placeat dolorem illo vel soluta delectus earum enim molestiae quisquam rem, laborum sed veniam? Culpa ipsa itaque recusandae ipsum Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore esse aliquam sit at quasi quod, cupiditate, debitis libero, repellendus saepe explicabo dolor aut! Accusantium autem odio dolore mollitia, iure veniam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti adipisci quos non itaque, iure eum saepe accusamus, numquam harum quidem nam id eos tempore commodi fugit voluptatibus in! Debitis, commodi.'
    },
    {
        id : 7,
        title : 'Komik dari Twit-nya Raditya Dika',
        author : 'Raditya Dika',
        price : 4,
        genres : ['Comedy'],
        cover : 'https://books.google.com/books/publisher/content/images/frontcover/TxmcCwAAQBAJ?fife=w200-h300',
        description : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis, rerum minima placeat dolorem illo vel soluta delectus earum enim molestiae quisquam rem, laborum sed veniam? Culpa ipsa itaque recusandae ipsum Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore esse aliquam sit at quasi quod, cupiditate, debitis libero, repellendus saepe explicabo dolor aut! Accusantium autem odio dolore mollitia, iure veniam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti adipisci quos non itaque, iure eum saepe accusamus, numquam harum quidem nam id eos tempore commodi fugit voluptatibus in! Debitis, commodi.'
    },
    {
        id : 8,
        title : 'Martha Stewart\'s Cookie Perfection: 100+ Recipes to Take Your Sweet Treats to the Next Level: A Baking Book',
        author : 'Martha Stewart Living',
        price : 9.2,
        genres : ['Tips'],
        cover : 'https://books.google.com/books/publisher/content/images/frontcover/2XGMDwAAQBAJ?fife=w200-h300',
        description : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis, rerum minima placeat dolorem illo vel soluta delectus earum enim molestiae quisquam rem, laborum sed veniam? Culpa ipsa itaque recusandae ipsum Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore esse aliquam sit at quasi quod, cupiditate, debitis libero, repellendus saepe explicabo dolor aut! Accusantium autem odio dolore mollitia, iure veniam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti adipisci quos non itaque, iure eum saepe accusamus, numquam harum quidem nam id eos tempore commodi fugit voluptatibus in! Debitis, commodi.'
    },
    {
        id : 9,
        title : 'You Are Not Your Brain: The 4-Step Solution for Changing Bad Habits, Ending Unhealthy Thinking, and Taki ng Control of Your Life',
        author : 'Jeffrey Schwartz MD',
        price : 19.9,
        genres : ['Tips'],
        cover : 'https://books.google.com/books/content/images/frontcover/eFHEXJnalPgC?fife=w200-h300',
        description : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis, rerum minima placeat dolorem illo vel soluta delectus earum enim molestiae quisquam rem, laborum sed veniam? Culpa ipsa itaque recusandae ipsum Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore esse aliquam sit at quasi quod, cupiditate, debitis libero, repellendus saepe explicabo dolor aut! Accusantium autem odio dolore mollitia, iure veniam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti adipisci quos non itaque, iure eum saepe accusamus, numquam harum quidem nam id eos tempore commodi fugit voluptatibus in! Debitis, commodi.'
    },
    {
        id : 10,
        title : 'All the Light We Cannot See',
        author : 'Anthony Doerr',
        price : 9,
        genres : ['Novel','Fiction'],
        cover : 'https://books.google.com/books/publisher/content/images/frontcover/CAEWAgAAQBAJ?fife=w200-h300',
        description : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis, rerum minima placeat dolorem illo vel soluta delectus earum enim molestiae quisquam rem, laborum sed veniam? Culpa ipsa itaque recusandae ipsum Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore esse aliquam sit at quasi quod, cupiditate, debitis libero, repellendus saepe explicabo dolor aut! Accusantium autem odio dolore mollitia, iure veniam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti adipisci quos non itaque, iure eum saepe accusamus, numquam harum quidem nam id eos tempore commodi fugit voluptatibus in! Debitis, commodi.'
    },

];

export default Books;