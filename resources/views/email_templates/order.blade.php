<!DOCTYPE html>
<html>

<head>
    <title>Order</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1" />

    <style>
        body {
            margin: 0;
            padding: 0;
            -webkit-text-size-adjust: none;
            -ms-text-size-adjust: none;
            background: #edf2ff;
        }

        td.tr-td,
        th.tr-td{
        border: 2px solid black !important;
        padding: 9px 20px !important;
         }
    </style>

</head>

<body marginwidth="0" marginheight="0" style="margin-top: 0; margin-bottom: 0; padding-top: 0; padding-bottom: 0; width: 100%; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;" offset="0" topmargin="0" leftmargin="0">

    <table data-bgcolor="BodyBg" data-module="01-Top Space Part" width="100%" cellspacing="0" cellpadding="0" border="0" bgcolor="#edf2ff" align="center" class="">
        <tbody>
            <tr>
                <td valign="top" align="center">
                    <table class="main" width="800" cellspacing="0" cellpadding="0" border="0" align="center">
                        <tbody>
                            <tr>
                                <td>&nbsp;</td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        </tbody>
    </table>

    <table data-bgcolor="BodyBg" data-module="10-Service Title Part" width="100%" cellspacing="0" cellpadding="0"
        border="0" bgcolor="#edf2ff" align="center" class="">
        <tbody>
            <tr>
                <td valign="top" align="center">
                    <table class="main" width="800" cellspacing="0" cellpadding="0" border="0" align="center">
                        <tbody>
                            <tr>
                                <td valign="top" bgcolor="#FFFFFF" align="center">
                                    <table class="two-left-inner" width="600" cellspacing="0" cellpadding="0" border="0"
                                        align="center">
                                        <tbody>
                                            <tr>
                                                <td valign="top" height="50" align="center">&nbsp;</td>
                                            </tr>
                                            <tr>
                                                <td valign="top" align="center">
                                                    <table class="two-left-inner" width="100%" cellspacing="0"
                                                        cellpadding="0" border="0">
                                                        <tbody>
                                                            <tr>
                                                                <td>
                                                                    <table width="170" cellspacing="0" cellpadding="0"
                                                                        border="0" align="center">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td><a href="#"
                                                                                        style="text-decoration:none;"><img
                                                                                            src=""
                                                                                            style="width: 200px;" /></a>
                                                                                    </multiline>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </td>

                                                            </tr>
                                                            <tr>
                                                                <td style="font-family:'Open Sans', sans-serif, Verdana; font-size:14px; color:#666666; font-weight:bold; text-transform:uppercase;"
                                                                    mc:edit="fm-39" valign="top" align="center"
                                                                    height="40">
                                                                    <multiline></multiline>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td style="font-family:'Open Sans', sans-serif, Verdana; font-size:20px; color:#3b3a3a; font-weight:bold; line-height:50px; text-transform:none;"
                                                                    mc:edit="fm-40" valign="top" align="center">
                                                                    <multiline>New Order From Laravel Store</multiline>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td style="font-size:5px; line-height:5px;" valign="top"
                                                                    height="5" align="center">&nbsp;</td>
                                                            </tr>
                                                            <tr>
                                                                <td style="font-family:'Open Sans', sans-serif, Verdana; font-size:14px; color:#3b3a3a; font-weight:normal; line-height:24px;"
                                                                    mc:edit="fm-41" valign="top" align="left">
                                                                    <strong>Hi {{ ucfirst($name) }},</strong>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td style="font-family:'Open Sans', sans-serif, Verdana; font-size:14px; color:#3b3a3a; font-weight:normal; line-height:24px;"
                                                                    mc:edit="fm-41" valign="top" align="left">
                                                                    <multiline>We've
                                                                        received your order. Thanks for your order:)
                                                                    </multiline>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td style="font-size:5px; line-height:5px;" valign="top"
                                                                    height="15" align="center">&nbsp;</td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <table
                                                                        style="font-family:'Open Sans', sans-serif, Verdana; font-size:14px; color:#3b3a3a; font-weight:normal; line-height:24px;">
                                                                        <tr>
                                                                            <td>
                                                                                <div>
                                                                                <p style="margin:30px 0px; font-size: 14px; line-height: 140%;"><span
                                                                        style="font-size: 16px; line-height: 22.4px;"><strong>Order
                                                                            details tracking Id
                                                                            #{{$tracking_id}}</strong></span></p>
                                                                                </div>
                                                                                <div>

                                                                                    <table>
                                                                                        <thead>
                                                                                            <tr class="main-tr">
                                                                                                <th class="tr-td">
                                                                                                    Products</th>
                                                                                                <th class="tr-td">Price
                                                                                                </th>
                                                                                                <th class="tr-td">Qty
                                                                                                </th>
                                                                                                <th class="tr-td">Total
                                                                                                </th>
                                                                                            </tr>
                                                                                        </thead>
                                                                                        <tbody>
                                                                                            @foreach ($products as
                                                                                            $items)
                                                                                            <tr class="main-tr">
                                                                                                <td class="tr-td">
                                                                                                    {{$items->product->title}}
                                                                                                </td>
                                                                                                <td class="tr-td">$
                                                                                                    {{$items->price}}
                                                                                                </td>
                                                                                                <td class="tr-td">
                                                                                                    {{$items->quantity}}
                                                                                                </td>
                                                                                                <td class="tr-td">$
                                                                                                    {{$items->quantity * $items->price}}
                                                                                                </td>
                                                                                            </tr>
                                                                                            @endforeach
                                                                                        </tbody>
                                                                                    </table>
                                                                                    <br>
                                                                                    <div class="subtotal">
                                                                                        <strong>Subtotal $
                                                                                            {{$subtotal}}</strong><br />
                                                                                        @if($discount_price)
                                                                                        <strong>Discount price $
                                                                                            {{$discount_price}}</strong>
                                                                                        @else
                                                                                        @endif
                                                                                    </div>
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <table
                                                                        style="font-family:'Open Sans', sans-serif, Verdana; font-size:14px; color:#3b3a3a; font-weight:normal; line-height:24px;">
                                                                        <tr>
                                                                            <td>Regards <br> Laravel Store</td>
                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td style="font-size:5px; line-height:5px;" valign="top"
                                                                    height="15" align="center">&nbsp;</td>
                                                            </tr>
                                                            <tr>
                                                                <td valign="top" align="center">&nbsp;</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="font-size:80px; line-height:80px;" valign="top" height="80"
                                                    align="center">&nbsp;</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        </tbody>
    </table>
</body>
</html>
