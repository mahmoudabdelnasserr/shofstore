from .models import Cart, CartItem
from .views import _cart_id


def counter(request, total=0):
    cart_count = 0
    if 'admin' in request.path:
        return {}
    else:
        try:
            cart = Cart.objects.filter(cart_id=_cart_id(request))
            if request.user.is_authenticated:
                cart_items = CartItem.objects.all().filter(user=request.user)
            else:
                cart_items = CartItem.objects.all().filter(cart=cart[:1])
            for cart_item in cart_items:
                total += (cart_item.product.price * cart_item.quantity)
                cart_count += cart_item.quantity
            tax = (2 * total) / 100
            grand_total = total + tax

        except Cart.DoesNotExist:
            cart_count = 0
    return dict(cart_count=cart_count, grand_total=grand_total, cart_items=cart_items)
