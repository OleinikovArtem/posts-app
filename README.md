1) git clone https://github.com/OleinikovArtem/posts-app.git
2) npm install 
3) git checkout -b имя ветки       (это команжа котораая создаёт и переходит на новую ветку)
4) npm start

Git мини гайд
====

git add .         - добавить все(. 'точка' = выбрать все или имя файла) файлы которые были изменины в список на добавление в коммит


git commit -m 'какойто текст' - создаст локальный комит с изменениями 


git push -u origin new-branch  -  отправить ваш последний комит на удалённый репозиторий new-branch //. new-branch  это название должно совпадать с названием локальной ветки


git branch        - покажит список локальные ветки проэкта


git branch name   - создаст локальную ветку с именем name


git checkout name - сменит активную ветку на ветку name 


git checkout -b new-branch - создаст ветку newBranch и сменет активную ветку на ветку new-branch 


git pull origin master - использывать эту команду находясь на локальной ветке master . для Получения последней актуальной версии с удалённого репозитория


git merge master -

  используем эту команду в случае, если вы сделали работу допустим на локальной ветке my-branch . 
  Паралельно ктото залил свои изменения в мастер. 
  теперь чтоб небыло конфликтов необходимо промёржить ветки, для этого нужно :
  
  1)сделать комит на текущей ветке my-branch , 
  2)перейти в мастер git checkout master , 
  3)скачать последнии обновления git pull origin master
  4)теперь возвращаемся на свою ветку git checkout my-branch
  5)сливаем изменеия из мастера в нашу ветку git merge master
  6)дулаем пуш на удалённый репозиторий git push -u origin my-branch



git checkout name - сменет активную ветку на ветку name 


