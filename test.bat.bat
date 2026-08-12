@echo off
echo Cleaning old results...
rmdir /s /q allure-results 2>nul
rmdir /s /q allure-report 2>nul
 
echo Running tests...
call npx playwright test
 
echo Generating Allure report...
call npx allure generate 
 
echo Opening report...
call npx allure open allure-report
 
echo Done!
pause
 