import React, { useState, useEffect } from "react"
import "../../assets/scss/productPage.scss"
import axios from "axios"
import { Button } from "react-bootstrap";

const ItemPage = (props) => {
  const [fullPrice, setFullPrice] = useState(false)
  const [item, setItem] = useState()
  const id = props.match.params.id

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`/api/item/${id}`)
      setItem(result.data[0])
    }

    fetchData()
  }, [])

  const calcPayment = (price, downPayment) => {
    let perMo = (price - downPayment + (downPayment && 1)) / 24
    return perMo.toFixed(2)
  }

  console.log(props)
  return (
    <div className="item-container">
      { item 
        ? <div className="item-wrap">
            <div className="item-group">
              <div className="img-group">
                <img src={item.img1} alt="item-img-1" />
                { item.img2 
                  ? <img src={item.img2} alt="item-img-2" />
                  : null
                }
                { item.img3 
                  ? <img src={item.img3} alt="item-img-3" />
                  : null
                }
                { item.img4 
                  ? <img src={item.img4} alt="item-img-4" />
                  : null
                }
              </div>
              <img src={item.img1} alt="phone model" />
              <div className="item-info">
                <div className="brand">{item.brand}</div>
                <div className="model">{item.model}</div>
                <div className="reviews-wrap">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                  <i className="far fa-star"></i>
                  <div>17 Reviews</div>
                </div>
                <hr />
                <h5>Memory</h5>
                <div className="memory-wrap">
                  <div>128GB</div>
                  <div>256GB</div>
                  <div>512GB</div>
                </div>
                <hr />
                { fullPrice 
                  ? <div>
                      <h5>Pay in full today</h5>
                      <div className="flex-row-left-left">
                        <div className="full-price lrg">${item.price}.95</div>
                        <div className="info"> + tax</div>
                      </div>
                      <a onClick={() => setFullPrice(false)} className="pay-full">Want to finance?</a>
                    </div>
                  : <div>
                      <h5>Finance From</h5>
                      <div className="price-info-wrap">
                        <div className="price-info">
                          <div className="monthly">
                            ${calcPayment(item.price, item.down_payment)}/mo.
                          </div>
                          <div className="info">for 24 mos.</div>
                        </div>
                        <div className="vert-hr"></div>
                        <div className="price-info">
                          <div className="down">
                            ${item.down_payment}.
                            { item.down_payment > 0 
                              ? <span>99</span>
                              : <span>00</span>
                            }
                          </div>
                          <div className="info">down + tax</div>
                        </div>
                      </div>
                      <div className="full-price">Full Price: ${item.price}.95</div>
                      <a onClick={() => setFullPrice(true)} className="pay-full">Want to pay in full?</a>
                    </div>
                }
                <Button onClick variant="success">
                  <i className="fas fa-plus-circle"></i>
                  Add Item
                </Button>
              </div>
            </div>
            <div className="details">
              <h4>Key Features</h4>
              <div className="features-list">
                <div className="feature">
                  <i className="fas fa-camera"></i>
                  <div>12MP Wide Camera</div>
                </div>
                <div className="feature">
                  <i className="fas fa-phone-square-alt"></i>
                  <div>14 Hours talk time</div>
                </div>
                <div className="feature">
                  <i className="fas fa-vector-square"></i>
                  <div>4.7" Retina HD - 1334 x 750p</div>
                </div>
              </div>
              <h4>Other Features</h4>
              <div className="features-list">
                <ul>
                  <li>5G Capable</li>
                  <li>Night Mode</li>
                  <li>30X Space Zoom</li>
                  <li>Intelligent 4500 mAh Battery</li>
                  <li>Superfast 25W Charge</li>
                </ul>
                <ul>
                  <li>Wireless PowerShare</li>
                  <li>Video Snap</li>
                  <li>Super Steady</li>
                  <li>Water & Dust Resistant</li>
                  <li>Quick Share</li>
                </ul>
              </div>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Tempora similique atque soluta natus, velit quod laborum
                iusto illum ea nihil explicabo consequatur magni repellat
                itaque adipisci voluptatum sit totam facere animi autem
                tempore iure amet. Esse repellendus, asperiores deserunt
                dolorem delectus aperiam distinctio est autem ea ipsum,
                iste facere voluptates itaque deleniti. Libero aliquid
                corporis vitae quam harum obcaecati repellat rerum debitis
                nesciunt temporibus.
              </p>
              <h3>Additional specs</h3>
              <table>
                <tbody>
                  <tr>
                    <th className="odd-row">Battery Description</th>
                    <td className="odd-row">
                      Built-in rechargeable lithium‑ion battery
                    </td>
                  </tr>
                  <tr>
                    <th>Processor</th>
                    <td>A13 Bionic Chip</td>
                  </tr>
                  <tr>
                    <th className="odd-row">Connectivity</th>
                    <td className="odd-row">
                      Wi-Fi 802.11ax with 2x2 MIMO, Bluetooth 5.0, NFC,
                      Gigabit-class LTE with 2x2 MIMO + LAA
                    </td>
                  </tr>
                  <tr>
                    <th>Operating System</th>
                    <td>{item.op_sys}</td>
                  </tr>
                  <tr>
                    <th className="odd-row">Supported Email Platforms</th>
                    <td className="odd-row">
                      Apple Mail, Microsoft® Exchange, POP3, IMAP4
                    </td>
                  </tr>
                  <tr>
                    <th>Ram</th>
                    <td>3 GB</td>
                  </tr>
                  <tr>
                    <th className="odd-row">
                      Wireless Network Technology Generations
                    </th>
                    <td className="odd-row">4G, 4G LTE</td>
                  </tr>
                  <tr>
                    <th>Mobile Hotspot Capable</th>
                    <td>true</td>
                  </tr>
                  <tr>
                    <th className="odd-row">Weight</th>
                    <td className="odd-row">5.22 Ounces</td>
                  </tr>
                  <tr>
                    <th>Ports</th>
                    <td>Lightning</td>
                  </tr>
                  <tr>
                    <th className="odd-row">Length</th>
                    <td className="odd-row">0.29</td>
                  </tr>
                  <tr>
                    <th>Height</th>
                    <td>5.45</td>
                  </tr>
                  <tr>
                    <th className="odd-row">Width</th>
                    <td className="odd-row">2.65</td>
                  </tr>
                </tbody>
              </table>
              <div className="fine-print">
                <p>Device information provided by the manufacturer.</p>
                <p>
                  Battery life varies by use and configuration. See
                  apple.com/batteries for more information. {item.model} is
                  splash-, water- and dust-resistant, and was tested under
                  controlled laboratory conditions with a rating of IP67
                  under IEC standard 60529 (maximum depth of 1 meter up to
                  30 minutes). Splash, water and dust resistance are not
                  permanent conditions, and resistance might decrease as a
                  result of normal wear. Do not attempt to charge a wet
                  {item.model}; refer to the user guide for cleaning and drying
                  instructions. Liquid damage not covered under warranty.
                  {item.model} is resistant to accidental spills from common
                  liquids such as soda, coffee, tea, beer and juice. In
                  the event of a spill, rinse the area with water and wipe
                  your {item.model}, and dry it. Up to 50 percent charge in 30
                  minutes with 18W adapter or higher (sold separately). Qi
                  wireless chargers sold separately.
                </p>
                <p>
                  Credit approval, deposit, qualifying service, and $10
                  SIM card, and, in stores & on customer service calls,
                  $20 assisted or upgrade support charge may be required.
                  <b> Equipment Installment Plan</b>: Tax on full price due at
                  sale. <b>If you cancel wireless service, remaining balance
                  on device becomes due.</b> Availability and amount of EIP
                  financing subject to credit approval. Down payment &
                  unfinanced portion required at purchase. Balance paid in
                  monthly installments. Must remain on qualifying service
                  in good standing for duration of EIP agreement.
                  Late/non-payment fees may apply. Participating locations
                  only. Examples shown reflect the down payment & monthly
                  payments of our most creditworthy customers; amounts for
                  others will vary.
                </p>
              </div>
            </div>
          </div>
        : <div className="loading">Loading...</div>
      }
    </div>
  );
};

export default ItemPage
