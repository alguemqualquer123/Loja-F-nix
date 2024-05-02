const express = require('express');
const cors = require('cors');
const config = require('./config.js');
const axios = require('axios');
const mysql = require('mysql2');
// const Products = require('./products.js');
const app = express();
const uuidv4 = require('uuid').v4;
const port = 6969;
const RestartPassword = '123'
const { Client, GatewayIntentBits } = require('discord.js');
  
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildVoiceStates,
  ],
});


app.use(express.json());
app.use(cors());

const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '',
  database: 'fenixdevelopment',
});
connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }
  console.log('Conectado ao banco de dados MySQL');
});


const ytSearch = require('yt-search');
async function searchVideos(query) { const { videos } = await ytSearch(query); return videos; }
function isMusicVideo(video) { const musicKeywords = ["official", "music", "lyrics", "song", "musica", "songs", "playlist", "top", "play", "spotfy", "música", "vmz", "Rap", "trap", "Trap", "samba", "Samba", "Pagode", "pagode", "dj", "DJ", "Alok", "alok", "Pop", "dizeer", "forro", "forró", "lofy", "boizinho", "sofrencia", "marilia", "tiaguinho", "sadsation", "xxxtentation", "matuê", "Matue", "mix", "remix", "Teto", "sofrência", "jõao gomes", "acordeon", "tarcisio", "bin", "anita", "belo", "vmz", "sadstation", "md chefe", "tz da coronel", "Poze", "pose", "do rodo", "-é+", "-e+", "trepper", "treper", "piltrap", "Adele", "Ariana Grande", "Billie Eilish", "BTS", "Cardi B", "Drake", "Ed Sheeran", "Eminem", "Justin Bieber", "Katy Perry", "Lady Gaga", "Lil Wayne", "Marshmello", "Michael Jackson", "Miley Cyrus", "Post Malone", "Rihanna", "Selena Gomez", "Shawn Mendes", "Taylor Swift", "The Weeknd", "Travis Scott", "Bruno Mars", "Coldplay", "Demi Lovato", "Dua Lipa", "Elton John", "Halsey", "Imagine Dragons", "John Legend", "Kanye West", "Khalid", "Maroon 5", "Nicki Minaj", "One Direction", "Pitbull", "Queen", "Sia", "Snoop Dogg", "The Chainsmokers", "Twenty One Pilots", "Usher", "Wiz Khalifa", "Zayn Malik", "Zedd", "otaku"]; const title = video.title.toLowerCase(); const description = video.description.toLowerCase(); const titleHasKeyword = musicKeywords.some(keyword => title.includes(keyword)); const descriptionHasKeyword = musicKeywords.some(keyword => description.includes(keyword)); const durationInSeconds = video.duration || 0; const isShortVideo = durationInSeconds < 500; return (titleHasKeyword || descriptionHasKeyword || isShortVideo); }


const DiscordOauth2 = require("discord-oauth2");
const oauth = new DiscordOauth2({
  clientId: "1091900395418308610",
  clientSecret: "v-E9VdXGAV8Mx9WRh5IAOnGp--ze47zL",
  redirectUri: "http://localhost:6969/api/discord"
});



app.set('trust proxy', true);
app.get('/api/discord', async (req, res) => {
  const { code, state } = req.query;
  const clientIP = req.ip;
  console.log(clientIP)
  oauth.tokenRequest({
    clientId: "1091900395418308610",
    clientSecret: "v-E9VdXGAV8Mx9WRh5IAOnGp--ze47zL",
    scope: ["identify", "email", "guilds", "connections"],
    grantType: "authorization_code",
    code: code,
    redirectUri: "http://localhost:6969/api/discord"
  }).then((data) => {
    const access_token = data.access_token;
    oauth.getUser(access_token).then((response) => {
      // res.cookie('user', JSON.stringify(response),{ maxAge: 60000 * 60, httpOnly: false});
      // res.redirect("https://6569f5d11d7bce00734ba899--shimmering-kataifi-450b5b.netlify.app/");
      res.cookie('user', JSON.stringify(response), { maxAge: 60000 * 60, httpOnly: false }).redirect("http://localhost:5173");
    }).catch(err => {
      res.status(500).send({ message: err.message });
    });
  }).catch(err => {
    res.status(500).send({ message: err.message });
  });
})


const musics = [
  {
    id: 1,
    name: 'Nadson Ferinha 1',
    alt: 'Nadson Ferinha',
    image_url: 'https://i.ytimg.com/vi/j3yyiqz4kd0/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLCrbFlc2ho6V2vKBvfYGaTRgDK5mw',
    src: 'https://cdn.discordapp.com/attachments/1158135276334501978/1174231640172671007/SnapInsta.io-NADSON_O_FERINHA_2023_-_REPERTORIO_NOVO_-_MUSICAS_NOVAS_CD_NOVO_ATUALIZADO_NADSON_O_FERINHA_2024-128kbps.ogg',
  },
  {
    id: 2,
    name: 'MaryJane VMZ',
    alt: 'vmz',
    image_url: 'https://i1.sndcdn.com/artworks-000486127707-a0vq6e-large.jpg',
    src: 'https://cdn.discordapp.com/attachments/1158135276334501978/1174312815239102544/Vmz-Mary_jane.mp3',
  },
  {
    id: 3,
    name: 'Longe De Casa',
    alt: 'vmz',
    image_url: 'https://i1.sndcdn.com/artworks-GCAWtQ2NxmM0Qzas-xl1AFw-large.jpg',
    src: 'https://cdn.discordapp.com/attachments/1158135276334501978/1174313091421450250/VMZ_-_Longe_de_Casa_.mp3',
  },
]
app.get('/api/sounds', async (req, res) => {
  const search = req.query.query

  res.status(200).json(musics);
})

app.get('/api/search', async (req, res) => {
  try {
    const { query } = req;
    const search = query.query;
    const phpResponse = await axios.get(`http://localhost/pesquisar.php?title=${search}`);
    const repList = phpResponse.data;
    const data = [];

    for (const rep of repList) {
      const download = await axios.get(`http://localhost/download.php?url=${rep.url}`);
      const download2 = download.data
      console.log(download2)
      data.push({
        image_url: rep.image_url,
        genre: rep.genre,
        _id: rep._id,
        url: download2.url,
        name: rep.name,
        author: rep.author
      });
    }
    res.status(200).json(data);
    return
  } catch (error) {
    res.status(200).json({
      image_url: '',
      genre: '',
      _id: '',
      url: download2.url,
      name: '',
      author: ''
    });
  }
});

app.post('/userinfo', async (req, res) => {
  const userId = req.body.userId;
  try {
    await axios.get(`https://discord.com/api/v9/users/${userId}`, { headers: { Authorization: `Bot ${token}` } }).then((response) => {
      res.status(200).json(response.data)
    })
  } catch (error) {
    res.status(500).json()
  }
});


app.get('/api/myscripts', (req, res) => {
  const data = req.query.infos
  const { id, username, avatar, global_name, email, locale } = JSON.parse(data)

  connection.query('SELECT * FROM scripts WHERE discord_id = ?', [id], async (err, result) => {
    if (err) {
      console.error('Erro na consulta ao banco de dados:', err);
      res.status(500).send('Erro interno no servidor');
      return;
    }

    if (result.length === 0) {
      res.status(200).json([]);
      return;
    }

    const data = result.map(row => {
      const infosObjeto = row.Infos;
      const { token, ip, expiredAte, name, value, type, client } = JSON.parse(infosObjeto);

      return {
        id: row.id,
        discord_id: row.discord_id,
        Name: row.Name,
        Type: row.Type,
        logo: row.logo,
        Infos: {
          token: token,
          ip: ip,
          expiredAte: expiredAte,
          name: name,
          value: value,
          type: type,
          client: client
        }
      };
    });

    console.log(data);
    res.status(200).json(data);
  });
});







app.get('/GetTokens', (req, res) => {
  try {
    connection.query('SELECT * FROM tokens', async (err, result) => {
      res.status(200).json(result);
    })
  } catch (err) {
    res.status(500);
  }
  return
})
app.post('/RestartAplication', (req, res) => {
  const { password } = req.body;
  if (password == RestartPassword) {
    res.status(200);

  } else {
    res.status(400).send('Senha incorreta !!!')
  }
});

const generateRandomPart = () => {
  return uuidv4().replace(/-/g, '').substr(0, 11).toLowerCase();
};


app.post('/SaveEditToken', (req, res) => {
  const { Data } = req.body
  const { product_id } = Data
  connection.query('SELECT * FROM tokens WHERE product_id = ?', [product_id], async (err, result) => {
    if (result.length >= 1) {
      const ResUsuario = await axios.get(`https://discord.com/api/v9/users/${Data.discord_id}`, { headers: { Authorization: `Bot ${token}` } })
      const infosUsuario = ResUsuario.data
      connection.query('UPDATE tokens SET name=?, discord_id=?, cliente=?, date=?, token=?, ip_authorization=? WHERE product_id = ?', [Data.name, Data.discord_id, infosUsuario.username, Data.date, Data.token, Data.ip_authorization, Data.product_id], async (err, result) => {
        connection.query('SELECT * FROM tokens', async (err, result2) => {
          res.status(200).json(result2)
        })
      })
    } else {
      res.status(200)
    }
  })
})
app.post('/DeletToken', (req, res) => {
  const { Data } = req.body
  const { product_id } = Data
  connection.query('SELECT * FROM tokens WHERE product_id = ?', [product_id], async (err, result) => {
    if (result.length >= 1) {
      connection.query('DELETE FROM tokens WHERE product_id = ?', [product_id], async (err, result) => {
        connection.query('SELECT * FROM tokens', async (err, result2) => {
          res.status(200).json(result2)
        })
      })
    } else {
      res.status(200)
    }
  })
})


app.post('/UpdateExistenteScripts', (req, res) => {
  const { Colum, product_id, newvalue } = req.body;
  console.log(Colum, product_id, newvalue); // Fix: change 'value' to 'newvalue'

  try {
    connection.query('SELECT * FROM scripts', [product_id], async (err, dataScript) => {
      if (dataScript.length > 0) {
        connection.query(`UPDATE scripts SET ${Colum} = ? WHERE product_id = ?`, [newvalue, product_id], (err, result) => {
          if (err) {
            console.error('Error updating script:', err);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
          }

          connection.query('SELECT * FROM scripts', async (err, NewTableScripts) => {
            if (err) {
              console.error('Error retrieving updated scripts:', err);
              res.status(500).json({ error: 'Internal Server Error' });
              return;
            }

            res.status(200).json(NewTableScripts);
          });
        });
      } else {
        res.status(404).json({ error: 'Script not found' });
      }
    });
  } catch (err) {
    console.error('Error in try-catch block:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
app.post('/InsertNewScripts', (req, res) => {
  const { product_id: product_id, name: name, type: type, src: src, category: category, description: description, value: value } = req.body
  try {
    connection.query('SELECT * FROM scripts', async (err, dataScript) => {
      if (dataScript.length <= 0) {
        connection.query('INSERT INTO tokens (product_id,name, type, src,category,description,value ) VALUES (?, ?, ?, ?, ?,?,?)', [product_id, name, type, src, category, description, value], (err, result) => {
          connection.query('SELECT * FROM scripts', async (err, NewTableScripts) => {
            res.status(200).json(NewTableScripts)
          })
        })
      }
    })
  } catch (err) {
    res.status(200).json([]);
  }
})
app.get('/GetScripts', (req, res) => {
  try {
    connection.query('SELECT * FROM scripts', async (err, result) => {
      res.status(200).json(result)
    })
  } catch (err) {
    res.status(200).json([]);
  }
})
app.get('/discord/widget', (req, res) => {
  axios.get('https://discord.com/api/guilds/1084640030233997412/widget.json').then((response) => {
    res.status(200).json(response.data.members)
  })
})
app.get('/Administradores', (req, res) => {
  try {
    connection.query('SELECT * FROM adminlist', async (err, result) => {
      res.status(200).json(result)
    })
  } catch (err) {
    res.status(400).json([]);
  }
})
const Products = {
  songfy: {
    "id": 145,
    "name": "songfy",
    "value": "50R$",
    "plano": "Mensal"
  }
}
app.post('/SendNewToken', (req, res) => {
  const { name, discord_id, ip_authorization, script, date } = req.body;
  const randomPart = generateRandomPart();
  const newToken = `${randomPart}-${randomPart}-${uuidv4().substr(0, 9).toLowerCase()}`;
  const product_id = Products[script].id;
  console.log('product ', product_id, script, discord_id, name, date, newToken, ip_authorization, script)
  try {
    connection.query('INSERT INTO tokens (product_id,name, discord_id, cliente,date,token,ip_authorization ) VALUES (?, ?, ?, ?, ?,?,?)', [product_id, script, discord_id, name, date, newToken, ip_authorization, script], (err, result) => {
      res.status(200).json(result)
    })
  } catch (err) {
    res.status(200).json([]);
  }
})


app.post('/ValidAuthorization', (req, res) => {
  const { authorized, discord_id, token } = req.body
  console.log(authorized, discord_id, token)
  connection.query('UPDATE tokens SET authorized = ? WHERE token = ?', [`${authorized}`, token], (err, result) => {
    res.status(200)
  })
  res.status(200).json()
})

app.post('/DeleteItem', (req, res) => {
  const { Data } = req.body
  const { id } = Data
  connection.query('SELECT * FROM scripts WHERE id = ?', [id], async (err, result) => {
    if (result.length >= 1) {
      connection.query('DELETE FROM scripts WHERE id = ?', [id], async (err, result) => {
        connection.query('SELECT * FROM scripts', async (err, result2) => {
          res.status(200).json(result2)
        })
      })
    } else {
      res.status(200)
    }
  })
})
app.post('/CreateNewItem', (req, res) => {
  const { Data } = req.body;
  const { product_id, name, type, src, category, description, value } = Data;

  try {
    connection.query(
      'INSERT INTO scripts (product_id, name, type, src, category, description, value) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [product_id, name, type, src, category, description, value],
      (err, resultss) => {
        if (err) {
          console.error(err);
          res.status(500).send('Internal Server Error');
          return;
        }
        connection.query('SELECT * FROM scripts', async (err2, NewTableScripts) => {
          if (err2) {
            console.error(err2);
            res.status(500).send('Internal Server Error');
            return;
          }

          res.status(200).json(NewTableScripts);
        });
      }
    );
  } catch (err) {
    console.log(err);
    res.status(500).send('Internal Server Error');
  }
});










//----------------------anticrash-----------------------//
process.on('multipleResolves', (type, reason, promise) => {
  // console.log(`🚫 Erro Detectado\n\n` + type, promise, reason)
});
process.on('unhandRejection', (reason, promise) => {
  // console.log(`🚫 Erro Detectado:\n\n` + reason, promise)
});
process.on('uncaughtException', (error, origin) => {
  // console.log(`🚫 Erro Detectado:\n\n` + error, origin)
});

//-----------------------------------------------// 

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

client.login('MTA5MTkwMDM5NTQxODMwODYxMA.G0bYcn.He9w8F4PbieNoLyGhAXu3UKkWgjrrmQDrY1-dU');