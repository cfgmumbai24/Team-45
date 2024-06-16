from twilio.rest import Client
import random

account_sid = 'AC2b0ca5563a2625a8e35161b8512f75df'
auth_token = 'fdb60fdbac1c6ee89b01eda0f4b18a06'
client = Client(account_sid, auth_token)

otp = str(round(random.random()*100000))
print(otp)

message = client.messages.create(
  from_='+14848015109',
  body='Share this OTP: '+otp,
  to='+919999367202'
)

print(message.sid)

