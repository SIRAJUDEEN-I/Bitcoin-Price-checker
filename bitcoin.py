import requests
import sys


try:
    coin = input(("How many coins you'd like to buy: "))
    coin = float(coin)
except (TypeError,ValueError):
    print("Invalid value")
    sys.exit()



try:
     bitcoin_json = requests.get("https://api.coindesk.com/v1/bpi/currentprice.json")
     bitcoin_json = bitcoin_json.json()
except requests.RequestException:
     sys.exit()
rate = bitcoin_json['bpi']['USD']['rate_float']
total_rate = rate * coin
print(f"Current price: ${total_rate:,.4f}")
