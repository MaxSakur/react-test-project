// DEFAULT
import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";

import mainBoxItem from './bodyTabsComponents/mainBoxItem'
// CUSTOM
import './bodyTabs.css'
import ModalDefault from './bodyTabsComponents/bodyTabsBox'
import MainBoxItem from './bodyTabsComponents/mainBoxItem'


// JSONs
const bodyTabs = [
    {id: 1, name: 'profile', components: [{}] },
    {id: 2, name: 'tags'},
    {id: 3, name: 'resume'},
    {id: 4, name: 'documents'},
]

const smallSectionElements = [
            {
                elementHeader: 'Current status',
                'Salary base': '50K €',
                'Salary varieble': '0K €',
                'Advantages': '',
                'Location': 'Paris'
            },
            {
                elementHeader: 'Wished status',
                'Salary base': '50K €',
                'Salary varieble': '0K €',
                'Advantages': '',
                'Location': 'Paris'
            },
            {
                elementHeader: 'Languages',
                'Native': 'French',
                'Intermediate': 'English'
            },

        ]

const firstBigItem = [
    {
        elementHeader: 'Current status',
        image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhIUExMWFhIXGRkZFhgWFxoaGhgWFhgXGxsgHBceHikgIBolGxceIjMiJSkrLjEuGyAzODM4NystLi4BCgoKDg0OGxAQGy0lICU1Ky8uNS02LS0vLS8rNzcwLS8tLS0tLS0tLSstKy0tLS0tLS0tLy0vLy0rLTUtLy0tLf/AABEIANoA5wMBIgACEQEDEQH/xAAcAAEAAwEBAQEBAAAAAAAAAAAABAUGBwMCAQj/xABAEAABAwIDBgQDBgUDAgcAAAABAAIRAyEEEjEFBiJBUWETMnGBB5GhI0JisdHwUnKCweEVM/EUkhYkJUOio8L/xAAZAQEAAwEBAAAAAAAAAAAAAAAAAgMEAQX/xAAqEQACAgEDAgQHAQEAAAAAAAAAAQIRAxIhMRNBBCJR8GFxgaGx0fHBMv/aAAwDAQACEQMRAD8A7iiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIDyxWJZTY59RwaxolziYAAXK969/a2JY9mBc6i1sg1Y43HiAAkENaSBecztBC8fjRvc+nWp4JrstIsD65Hdwyg9AA0mNbjos5Rh1Co9ocMLSZ9o5jvtGNqBzRUY2Ic8OIc8zIbwjQhZc+SaaUTZgx49LlM8MBtPaTKpfQqPLhNQ5nueC2nlNQOlwaQGkSwuLhmkRYrs26G9Ixfi06lM0cVRMVaZmNSMzCRdhLSJ7amxP887Q3kq4inh2Ux4IbTAqBgAmsGVKTnMIvlfRcxrgebfc674S7y1KtbDCo4ur0neDndq/C1GkZC7mWVW03Cbxm6lWQ1LkjlVq6r0O9oiK4yhERAEREAREQBERAEREAREQBERAEREAREQBERAERQdt7Wp4Wi+tVJyMEwNSdAAOpJhAlZOWO+IO/FPAMFOnFTG1LUqYvlLphzwDOXtzjkJI57vb8ZMQ4Pp4JjGWINS73NM8rAAx1B59pxe7u02UC/EVYJInNdz80gxxG7nAQTY+UzYzXKb03EtUEn5j6x2Oq131MPWEYqvWBqmq4C7i3IJ6WvFg0CLQrjeHHPw1Kng8HlFLw6lOsHkudSfUz0cRTcTyL2CoDyNxwmFBwO1KNDEPxtX/AHiJotAOV2b7r2x/tupBzAYkAtN+VUNtAmGy55kkkmR6vN573nmqqb7f024sUZt63suPiR6Oz/Czvc6SG2GkCPX8rLY/BBlRldhaQ0VXHNmEywAxEdxraDHW+Lr565FNotIzkWFyAGjuSQPUhf0J8Md1Tg6PF5nAAS0tcACbOYTGbTiHOVZTezIeKnC0ocL8s26IitMAREQBERAEREAREQBERAEREAREQBERAEREAREQBfzfvJtMYzFYjxqpJZiKmWGjhpMc4QH+YiGtGUcNnkmTfr3xO24+hhhRpEtr4iWMcDBa0AZ3A9QD25mbL+d/CqUzXoiTVafCbnJ4QxxBy3iMsa6Zu6pyVLy3wacHlepotfGpZSxgY1xzAhsGAQTJiBlEc/4jeIj7wOAZTbmqNJFMyyRbNE2mziA0jkJIjmVO3W3UEtLjmceuhIMi3bqegK1O82yA/B1Az/dpxWYNL0xcR/KT8wqOpGM6XB6eTFOcNclTrZfc45t3GvfVeHfdc4R+IuOa3ITMDkvHD1slMx5nmJ/CP8r92vSOZryLOA/7mgB3zs7+pQmu0W2tjyY5WpW/ftHevgpuswhteq0OyBr2Agf7r8xzHuxth/MT0jsy4B8P95alKthiySHFrKtMXz0nCcwHWnqD0DhzXcNo7Xo0W5qlRjBcS9waLROvqoKSS3O5oNS2J6Kq2RvFhcSXNoV6dQt5NcCdAdPf6hFJOylquS1REXTgREQBERAEREAREQBERAEREAREQBERAERfhMXOiA5H8RcaG7SzVXcFGkw0mHmSSXEepgEc8vOFz3Ctc59WtUHFUcXns22UemWCom+m8Bx20a9Qkim+BTjnSaAGW6kSY6vK+cbWc8im1xykw53cRytIAIn9hZ3DzOXqelgnFRTa4/JosJtymwgF2htY62sOWqucDvfQLg0usNR3OsCSY6ieqxuB2UYa4RkHncSBbQRPeY7g9FIa19N4NiCTMiMgIteBa0WB0VLxwbNMvF5Gt6K7eDCYd5c2lUa1hfLc8yCAGiIBsGgA3vANrzXUN1qeRrqmMoMnNwiXulpI0HKADPdao0mua0vLYZljhFnEuEueGxnJJ+eglSMNgaMZfDGcFpzeGIlx1uQSIJm9vVWPNSPMcLkz12W9wqMGCpCm0imBUePvUmODnM/hYS55vOovyWkr7tZnPdXf4hc08ed2pJmADmMazm0IHdScBRGZpAvwyco1Em83HUdJHRTa5LnBrB9poMoBIJgkDncN0C8zN4mTlUTXCFHjujsClT2hQqUm5XNbUzi5JzNi58ogkadR3RbPdXYP/Thz3wazwAT/AAsGjZ9ZJ7nsEXreHjKONauTDmkpS2L9ERXlQREQBERAEREAREQBERAEREAREQBERAFnfiJjTR2ZjqgMOFF4B0gvGUR3ly0SwnxteRsjEAfedRb7Gqz9ECP5uZhy5pc0S4EAZR7xHorbCVKZyBg4SRwkWEC8mecEaalRcLSJZLLVBLuhPhiZv7Ajv3X3QJs4tAcA2RFj0PuI+qre+xsjsbHY+0mlriXOZIa6poC5zXSXEgGBLXAQM8OsDF/vaVPxGZILqpBJD3T9oTOaQAB5QOK1+srIHFMMCYOpF4gEgDSNOTgQp9OscoLa1Rp5xLdZNnM//Q5lZnhp2i5ZLVGjweDfQqFpIyloIZLRawNvkbWkgamTebMcKmSW5DbqYB9tf7TrBWXwmBYGvcHw2xe7MQ5wyweLvPPutBsKlWxLf/J0apbP+4QGNPUh51nXlPJZ8kHPjkKlyaOmAHNYzic5wa0QeJxOgOgAFyeQaV0HZeyqdFoDRLubiL/4HZU2626ow7vGqnPiSI1JawWBDZ1JAEk/3M6dafC+GWNapc/gy58up0uAiIthnCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCwfxuH/pFc/wAL6J/+5g/utJt7efCYMTiKzWGJy6uIlo8ovq4fNcV+KfxJbj6Qw2Fa4UCQ57nCHVMt2gN5NkTMyYHvwlFOzL7Pp5hSyAAkOBzCB79r8o78l50sM6mS0tkg5Y/A7ofUWPqr/c7CiXOeYZygwIgC9jF5v1+ah7z0i2oHgggwBHMX+sj+6xxyXkcT09K6Tl6FPjNlODaj3UoaKhBAefEzVGuyyTJyB0cpkkKXs3AVWAFw4TedQ3I3mCdZvBIiei9W02uaABIdcWEhxLSRBNtCOGLlSKzsuGd4s5WyWTyPKSNZGk9RKnKbqipRXJ57o7LG0MTTpmC3xWjKPKWNMuc4ak5GkXMQv6co0msaGtaGtAgACAAOQA5LmvwV3Rdh6H/VV2xWqt4ARdtNxDjPqQPYd101XwVGPJK2ERFMrCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiKg3w3qo4ClmfxVXWpUgYL3d+jBzd+ZgEdSbdIt9oY6lQpuqVXtZTbq5xgD/PZcb32+LdWoX0cA1zQ2Q6sRedLfnzJ9JnH7c2ti9oYg+LUJPIX8OiCCAGs0zW1NzzOig1W8LaGHaDJPEZJJm5Db2uBm+SrlkSNEcHqUWPc+rAfUfWrHUkkwLzfm4kC5VriNnZHeUwA5gBIBJgT8mzftOqk4bDMp4hrGmWt8zrAyIE87g6ene9t/oFXOK2QCA1jpJJbblaAb5eIAQbxmtTky00W4sfL+hZ7MpZGuLbFhaCLS4EA3uJtPL5xCkbVwTKlJ7ZJqXyzoSyDHqRmhfmCwVQVoJc0fZhziZBMv6mBrE6XA0XptV+R51zAz5gQWmZvGsHTl3Cx76rN+OncTH7Kb9oLkM8z4Jgaieupv72Ws3L2cNqY5ueRhqGZwbA+1LSB00ki89QFkNrUQ2nTptzCtXLSMpsG3ESNYFzaxi3TsvwbwAbQqvAAaHCiwDpTaC90m/FUe7/ALVtUVOVnlpuGOjoQC/URaTMEREAREQBERAEREAREQBERAEREARFVbxbx4XA0/FxNVtNv3Rq5x6NaLk+iAtUJXHMf8dWZow+EzN5GrUyn1LGtdb+pY7bu/m0NoSwPNOibFtKWz1BPmPraxjmuN0WLHJnUt+/ifh8IxzMO5tbEwdDLKY5OeRrM2A16gXXJalWqWPxOJqGpWLcz3PvLjMCOQAsAAALqBgdlNNZjCOF1VrTA/hlx9iW3PIErR7Yo52YSmGmatZmZsifLmII0Bgys2XIrSNOOGhNkd2yjRoST9plLj18VwJkG18xIH+VX7NrCjSqVCJeAGskEZbPg2i2fNr2PSN/tfAF1M5RLQ27SBJJaJDhEib++ui5rtWk9tCnMjmRYXLumsy0k9DmixEUYZ9TZ+pdJaY7dkTN2cF4gNXKCCQBmGaG5TlMEXGaecCy32BDo4i4uc0WdcBz4LuxJiBE5RmjmqDd99PIGtIIayWwTEACJImTBaQNbg30Fzs7aTjkabk5Q6CQZzOaOH1ETJi/oM/iJObbLMcNMUkSqtNpNzLgwmMpIIDgbhwILheZ5DlCotsMfYOygkubGZ0BjTw3OWG9NLzl1kXOMJa5tQWadXcIvFwfaB0EBU21abnU2BstNZ7WEQJiMxMOIkggGGnleRMdxyukW/8ACcjO1jUq1fH4mtaHMpZpLnBpi8xAJJGUaGRzk/0Xu7spmFw1GgwQGNv3ebvJ7lxJ91/OuKovpYmmzytbWpTEgBniD+xN/df02vSwrY8/xWyivqwiIrjGEREAREQBERAEREAREQBERAERZDfrfqjgGOaIfiIkMmzAdC+L35NF3HoJI42lydSbdIfETfqls2loKmJePsqU+2Z8XDAfcmw5x/PO1zisZWNbEvNSu68GzKbNb8mtAPlH11VqaVbF4h2IruJfPE7+J9/YNYIaBpY2Xk+ucRWp4elagXfaOv8AaAEzBjyCNe496Xlvg1xwKKuX0+ZG/wBEa1rMpzBxnPeHelvLCtNh5KdAVC3zvLhOoY1oOncA/I9lqdv4NvhGo2zmsy02x99/BTb83D9hZjE4QtoVGggik5zWm+tFlBrh885B6yOayrN1Ek/fvY0OKim4+/e577Cpk1mu1IbOgHG4NE3humYxz0VzUDjj8G0aNZVqC2bi8rZF4AzCQNAqfYlJzTTqNMO4Aec5SBIt5eInXUAhaPDMzYtrpksoGwEwajxlgWPC5okjoJVeR7v5UdrYuMdVIpVoAaIN4uHVGsLdIFhIgTNrzKxm92HHhOBI4A2zZ+6eWn8Wi0dXFtYXFsT9xpc6xytyixyRxPbOnl5hYvbW0DDmBr5LS0nLo0gi41FrEci0XjXmGL1Kjr2i/iWW7oNOmGvBiBGW5ZLSCZiQ2BE31hT3UajHOfBL3BnCZ4Z5kcyLmb39FlNj7aqeNw2GVro5GDlII/hh1+4HW+7xuIdi6zGkB8AGXTDcwAuLETe8/qu5YNS37k8WRJfAnbLoOqCm+oSLNkSXCzSddTaLQ2ZBOsKRXwH29MtaPDa1zpkXdIaNDyBmfTuVOwmGykaGGgSADe41197aKxpUpu6fy/enPuuRikiic22YzeTYJr03v8j2A5SRJMHSByIuCZ76Lqu7u0P+owtCsQQXsaSDqHRxD5ysRtt5ljBZ1RzKTeV3uDQYIGgf7cUXgroWDwzKVNlNghjGhrQOTWiAtnhrpmbPK0keyIi1GYIiIAiIgCIiAIiIAi+KtZrfM4D1Maqk2hvdhaTQRUDyfKGQZM5RxGwl/CDOp9UFF8vOvWawS5waOpPM8vXsuX7Z+MmHp5gxoJFRzbEPJY2OJoFhmBtmtIM2XK94t88Zj3QajmsBcTBuM2otoA0wAOpvLiouSJKLOs74fFBomjgSH1Lh1U3ayDByjme5t6rlxc+rXAzTlmpUc6SXPcDBJJkxE3UTd7DBzA5rQGhxB7wYEr5w2IJdindS0aH7pda34XBZcknKzZhShXvjcn7TqZaEM0c4MJGoaZ09Yj3+cr4f071ajhlc1wYDP3cotH19x2Uj/TXPwjnNu8cTRa5GV2sm89xaeyh7vYqDiBEAta0mBZ4m0j8QiJ59YVd3ikl6/olb6kX8zTYysA9rySadKapgk5nsa4NFrwBfTUjoqFz3v2cXf+45ld7r83w7rPL5Qo+0tozRe2Yc5wYf6nX/APjZW+z8E04Om3Uua4exkAa/X06KvToSb9f3+y503p+H+kCrXDeMNmwcRF+EgnmTcC6uKVeKzDBdna2JkgeESRGVuYcWUiTBIdKyeGqTSaTch1Sm64mzune8+vyscPieETq2LQQBlNiINj+L5aKyWPY4m3uzTDLLi4guIEOh3BmDQ1sOmOKIMR1vZV1dviXF2+h0t1Hc34dOQ09KxLhlAtyLCARnEagEtE2MXHhtPVW+yMMG5szQSb5tA3W4vbWJB5EQIk1cbkmzLP2c3DVTWczhfTIaIEBxII1H4J56qbu1vGxj6njZmh4blynOGxOYWvIPbT1AWxr4FtQEPAIvwkCCPmdbm/UaQvF25WEcINENM/cLmOn+Zp/YnqpqSkvMipyo99ibawtYnwqrS4Dy+V4A1lrgDHKf8q5GLtaT1keo9Tf8lz1+54oVfE4nUQQRUYS2oy8ZoEB8R3sbtXVcHsAOofacNZw1A8thAjmOZB5zfRSWPU/IUyklyZPA5X4zDl4JYag4g0QHNksExpnAFu3qumrim8mMr4fFHD4hpaHjgIJDKrAQZY7VsakAgggayCek7n7zUcXTLRUBr0wPEb96D5XRzBHMWmQr/Dtq4yVEc8NlNcGiREWkyhERAEREBktp4yqwEtebTPyushj968W0ZhUOtrWsMvv/AIWl3gJ8N/t+ax+0niW28o0vz/vZUym0XRgpMrcXv/tHytdxRcw6wE99evsqzG/EPaZaXF4aASQeO5IsIz6AhfOHEsL+b3m/O0wB8jootbCeJXYIBa1mcx1Jy3PqG6Kt5qZcsOyfd8fXj9kCttvaVbiqVS03IMAHiBBu6SOFxHZZ2q6o8uzOc/7rQSTZvQad4harH0c3hUxYvNz0aD/j6FSK9OnQaXEAlreECLgWt0J+oXOsdWJXXoZxuwH8DNar9GDRoPMx9BN/qrfF7DFCiIILjqAQYyyTca6a9dLAKywlJzaDnkzUqTLr2ZF4Pcx/SQJso/hGoCQRIi34ACCBoIEql5W++xZ00t/f9I+wMRw1qRtxB99eJoB7GS0qFTdDq7DaSKjRYy2RMWJ8uUwL626/e0cE6kWvBmAWu/kd19FE2jUDiyo1v2rTPq3oe8X+vpNJPddyL2Vrlfc2uyKb3NbDvsw0EAEWg3gRzBg+41le+2NmsY9z2ACnXa4ObbhrUw4y0WkHKYHf0j93fxmVuYuEZQ5p4R4gguBMAAiMwM8wPVRMVjnVKug8tgLlpGgsZIOaDcHToqY27otUTL4p32rqYtIlo/E0ggfP81rNmtijSIFgIgjNNyQPWT9Fi9ssh7HsJmLTIIjl2IMfvTQbA2gHYZkC/lNuh4TFpBn6LRmjcU0RhJJ0yp2I4O8dpdfxXuExeDzM9fqrDZVJsw6YGaD+KCWx6SLyIg9yvLCYR7qjy0QMzjwnVxNxI7m3KBz5WGBoEua1sguILpMGJiwB6ujnyPVclLk6i12ZQzCABpLLAiWwdGt0BAnSbDnC1+Aw2Vo0jl7TEH3iVC2Xg/DbEXHSwMnp0BC0GCohul+h68x+nuVR3OSkfVNth05a+v7HZSRYe/vfSSv2mz6f88vl81+eE57srBJPyEdT0UkilskbOw3i1B/C2CfYktHzA+S0qj4DCCkwNF+ZPUqQt2OGmJmnK2Vu39h0MZSNKuzMyZBBIc13VrhcG/1I0XPsZ8NMThXeLs3EkvAs2tla+OYbWY0CCPuuaRIBK6mim0mIzlHgx+7G9Fd1U4bG0TRrgNyOMfaSDNmkjlGZpyk2sYB2Cot7N22YylGZ1OuyTRqscWuY/lPVsgEgg6DmAVeN0E6orOSae6P1ERdIhERAUO08KHAgiQdVjtpbEaZJHT5DRdMqUg7UKrxmxs3ld8/1WfJjk+C2E0jkLt3YY1uYjKXRHR2n0VfiN36jaz2i/wBkMpEQRYR8wbLp+P3eqjRkj8P7n6KrOBI1DgZ5iP3osk9UTTFp1vxX2OdYvZ9RvhOcNH5ZvEOEdOo7ar42zsys9zQ8Hws7BwtGmYf3gLoDsAXC8H8h+/3ovGphHyJHQ/JR1dybad2UGIohrclzAAtpbT+mQf1lVz8NDnZOwcR3idOV9fVanGYWOIiTb7vqOXVRmYXK4a3/AF5kLkUiTnZz6hi3ioaNYtOoNpjkdBpBKrSDTeRNmkAn0sPqFsN5N3z4znM9ZsIuQZ5DSfcqmx2HIyk/eBBsBxDSRFunsr4yXYgrobD2rlPguvTcXeFBdYuMubMxZ19DMme9vhXy8unKWkgN1+9oY5Ees81lKWFLs4EggyB0Ik9BfKDp+avNkYzMX1HXe+A7QQQyXdYLjljTzG8hd0JNte/6ShJ3pf0/RG3gwDxDuEGTYReRyPMTPyU/BbKc2lwA8TQRaBcTqp+Pot8EE5XHUcUnSYiNQRysLrS7sNa+iw2gduQJ720RzekNJMzOxcBiCXsDcoMyDznNqY7f83jWbM2MWcRBBNzANxDRyi40iSSr+hhmNcDz9uWk26/kFJDWzMi0mfzj5/kq3bdkHMj4bCiSbd7nWT/x7RyUlro6G/75fT9F+uqAWAJ0Fvlpr+x2UjZeANU6w1ph5B5wLCOcfSFKMbdIrcu7P3C0HVDlYP5naAfqY5ei0ODwjaYhuvM8yV6UKLWNDWiGjQBei2QxqPzM8p2ERFYQCIiAIiIAiIgCIiAIiIAvl9MHUAjuJX0iAg1dkUHa0x7SPyUOru3SOjnt95/MK6RQeOD7ElOS7marbqyCBUEHq3/PVRGbo1Gg8bXG8CCJ7Stgih0Ieh3qSOZbU2e6RnbD2mOIGY5x19pCy28+ApNpPc8ZLQDbzXgBupJ6BdzrMaRDgCO4lcM+IGKFfaTaVFoZRwwM5WxnruAzE8iGtht9IcqJ4NO9l2PI5OjJbFxLg4PyuBmeTSToeEiCTr39lJoU/DxNI02ljajRwixFQAFscoe4FsG0h3W9/hcD4lURmDrS79ReZj5+pj32lsiXBj3OPhkFrjJNQDKQRJkuGSJNuJx1VXUWr6GuvLtyiPi6LhRaWlppvAa01BxOOV4LbakATPNSNwqk0TGk6XFp68l4bZquZTjI20m5knK2xIFmiXfUBa7cHc5r9mUamZ1PE1Gl4eeIAOccssOoLQ06g91PFCUouivLNJ7k2g7nz6AGO8d7L1q4gNBc4gN1JNh3Mm0frrdYfeDa+LwVR1J7WtqiI1c17DMOadY4SIiQZssJtXaeLrtBe9xDdBIa0GfutHa2hNjdTjjk+dip0dC3g36YyW4cybjOe0aDQC2pv2U34IbymrXxdB5kuArN1kkHK/XsWLkeFwlVxl3YkzrA6z25+63vwiwRp7TovnzU6jbfyg3sOnJXxiosjPeJ35ERWmYIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAi7Rr5KbndBbueQ+a5pR3XOcv+86S4xq5xk/NdI2poPX+y8GNHRVzVlkJUjKYHYWS4HFe+kA8rH09V6v2TF4BdoSBqP3y/NahwXm8Kvoxbsn1pGNduucQ8MjK0njMfd1Pv09Vv6jm0aVhwsaA1o6AQAPyX7gWjKvzHjh9/wBVdGKiqRVKTk9zl+29j1sVXdWqi5AAEWawTDR2Ek+pXiN0RHl+gi99F0jIOgX4GjoFI6pUc1/8IyfLrI05LVbnbuCliDVjysIE9Xxp7NK0YaOgU3AgZT6/ouUHJ0SERF0gEREAREQBERAEREAREQH/2Q==',
        'Salary base': '50K €',
        'Salary varieble': '0K €',
        'Advantages': '',
        'Location': 'Paris'
    },
    {
        elementHeader: 'Wished status',
        'Salary base': '50K €',
        'Salary varieble': '0K €',
        'Advantages': '',
        'Location': 'Paris'
    },
    {
        elementHeader: 'Languages',
        'Native': 'French',
        'Intermediate': 'English'
    },

]


// FUNCTIONAL COMPONENTS
const BiggerSection = (props) => {
    return (
        <div className="bodyTabs--bigSection">
            <mainBoxItem>
                {firstBigItem.map((item, index)=>{
                    return (
                        <ModalDefault
                            key={index}
                            item={item}
                        />
                    )
                })}
            </mainBoxItem>

        </div>
    )
}

const SmallSection = () => {
    return (
        <div className="bodyTabs--smallSection">
            {smallSectionElements.map((item, index)=>{
                return (
                    <ModalDefault
                        key={index}
                        item={item}
                    />
                )
            })}
        </div>
    )
}



// CLASS COMPONENTS
export default class BodyTabs extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            tabIndex: 0,
            open: false
        };
    }
    render() {
        return (
            <div className="bodyTabs">
                <Tabs selectedIndex={this.state.tabIndex} onSelect={tabIndex => this.setState({ tabIndex })}>

                    <TabList>
                        {bodyTabs.map((item, index) => <Tab key={index}> <p>{item.name}</p></Tab>)}
                    </TabList>

                    {bodyTabs.map((item, index) =>
                        <TabPanel key={index}>
                            <BiggerSection/>
                            <SmallSection/>
                        </TabPanel>
                    )}

                </Tabs>
            </div>
        );
    }
}