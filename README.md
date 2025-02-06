# sa-qx-profile

## 1:任意のディレクトリでgit clone 
```bash
mkdir sa-qx-profile
cd sa-qx-profile
git clone https://github.com/pv-y-nagamori/sa-qx-profile.git

git checkout -b {ブランチ名}
```

## 2:dokcerコンテナ立ち上げ
```bash
docker compose up -d

docker ps
```
4のコンテナが作成されていて、動作していること

## 3:appコンテナ内に入る
```bash
docker exec -it {3で表示されたイメージID} bash
```

## 4:env copy
```bash
cp .env.example .env
```

```.env
...
DB_CONNECTION=mysql
DB_HOST=mysql
DB_PORT=3306
DB_DATABASE=test_db_name
DB_USERNAME=test_user
DB_PASSWORD=test_pass

...

MAIL_MAILER=smtp
MAIL_HOST=mailhog
MAIL_PORT=1025
MAIL_USERNAME=null
MAIL_PASSWORD=null
MAIL_ENCRYPTION=null
MAIL_FROM_ADDRESS=null
MAIL_FROM_NAME="${APP_NAME}"
...

```
DBユーザー周りは、適宜ymlと一緒に変更

## 5:laravel設定周り
```bash

chmod -R 777 storage bootstrap/cache

composer install

php artisan config:cache
php artisan config:clear

php artisan storage:link
php artisan key:generate

php artisan migrate
```

## 6:フロント設定周り
```bash

npm install

(npm run build)
npm run dev
```

http://localhost/