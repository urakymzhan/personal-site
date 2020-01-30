#  on terminal:
# 	curl -I https://fast-brook-31066.herokuapp.com/

import requests
import pytest
import json
# import smtpd

def getUrl():
	myUrl = 'https://fast-brook-31066.herokuapp.com/'
	response = requests.get(myUrl, headers={'accept': 'application/json'})
	# my data is empty because website takes too long to reload
	# data = response.json() 
	return response.status_code

def test_getUrl():
	with pytest.raises(Exception) as excInfo:
		raise Exception("can't fetch url")
	stCode = getUrl()
	assert stCode == 200
	assert excInfo.match(r"^can't fetch url$")

	# you can implement sending email if it fails later optional
	# from email.mime.text import MIMEText
	# msg = MIMEText('todi si tho lift karade :P')
	# me = 'from_mail@gmail.com'
	# to = 'to_mail@gmail.com'
	# pswd = 'abcderfyqwerpokl'
	# #(if 2 factor-auth is active for your mail, visit https://myaccount.google.com/apppasswords select your app device and generate your  12 letter app password, Give those credentials to signin when you are writing the code)
	# msg['Subject'] = "lift_karade"
	# msg['From'] = me
	# msg['To'] = to
	# s = smtplib.SMTP('smtp.gmail.com', 587)
	# s.starttls()
	# s.login(me,pswd)
	# s.sendmail(me, [to], msg.as_string())


