import React from 'react';
import { SafeAreaView, StatusBar, Text, View } from 'react-native';
import { Button } from './src/components/Button';
import { globalStyles } from './src/theme/styles';
import { useCalculator } from './src/hooks/useCalculator';

export default function App() {
  const { formula, result, buildFormula, clean, deleteLast, calculateResult } = useCalculator();

  return (
    <SafeAreaView style={globalStyles.background}>
      <StatusBar barStyle="light-content" />
      
      <View style={globalStyles.calculatorContainer}>
        {/* Pantalla de resultados */}
        <Text style={globalStyles.subResult} numberOfLines={1}>{formula || '0'}</Text>
        <Text style={globalStyles.mainResult} numberOfLines={1}>{result}</Text>

        {/* Filas de botones */}
        <View style={globalStyles.row}>
          <Button text="AC" color="#9B9B9B" onPress={clean} />
          <Button text="DEL" color="#9B9B9B" onPress={deleteLast} />
          <Button text="^" color="#FF9427" onPress={() => buildFormula('^')} />
          <Button text="/" color="#FF9427" onPress={() => buildFormula('/')} />
        </View>

        <View style={globalStyles.row}>
          <Button text="7" onPress={() => buildFormula('7')} />
          <Button text="8" onPress={() => buildFormula('8')} />
          <Button text="9" onPress={() => buildFormula('9')} />
          <Button text="X" color="#FF9427" onPress={() => buildFormula('*')} />
        </View>

        <View style={globalStyles.row}>
          <Button text="4" onPress={() => buildFormula('4')} />
          <Button text="5" onPress={() => buildFormula('5')} />
          <Button text="6" onPress={() => buildFormula('6')} />
          <Button text="-" color="#FF9427" onPress={() => buildFormula('-')} />
        </View>

        <View style={globalStyles.row}>
          <Button text="1" onPress={() => buildFormula('1')} />
          <Button text="2" onPress={() => buildFormula('2')} />
          <Button text="3" onPress={() => buildFormula('3')} />
          <Button text="+" color="#FF9427" onPress={() => buildFormula('+')} />
        </View>

        <View style={globalStyles.row}>
          <Button text="sin" onPress={() => buildFormula('sin(')} />
          <Button text="0" onPress={() => buildFormula('0')} />
          <Button text="." onPress={() => buildFormula('.')} />
          <Button text="=" color="#FF9427" onPress={calculateResult} />
        </View>
      </View>
    </SafeAreaView>
  );
}