<script type="text/javascript">
//� ������� �������� ������������ ������� ���������� ����� � �������. ������: function power(val, pow), ��� val � �������� �����, pow � �������.

function power(val, pow) {
  if (pow != 1) { 
    return val * power(val, --pow); // ���� ������� �� ����� 1, �� power(val, --pow)
  } else {
    return val;
  }
}
alert( power(2, 5) ); // 32
</script>