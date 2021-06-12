npm install && ^
npm run build && ^
cd "C:\Program Files\IIS\Microsoft Web Deploy V3" && ^
MSDeploy.exe ^
-verb:sync ^
-source:contentPath="C:\Windows\System32\config\systemprofile\AppData\Local\Jenkins\.jenkins\workspace\Angular Web Deploy\dist\ngweb" ^
-dest:contentPath="D:\jenkinsNgWeb\iisweb" ^
-allowUntrusted ^
-verbose 
