
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const OverlappingCard = () => {
  return (
    <View style={styles.cardWrapper}>
        <View style={styles.balanceCard}>

          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>
              Total Budget
            </Text>
          </View>

          <Text style={styles.totalBalance}>
            ₹ 40,00,000.00
          </Text>

          <View style={styles.divider} />

          <View style={styles.balanceRow}>

            <View>
              <Text style={styles.label}>
                Available
              </Text>
              <Text style={styles.amount}>
                ₹ 20,00,000.00
              </Text>
            </View>

            <View>
              <Text style={styles.label}>
                Spent
              </Text>
              <Text style={styles.amount}>
                ₹ 20,00,000.00
              </Text>
            </View>

          </View>
        </View>
      </View>
  );
};

export default OverlappingCard;

const styles = StyleSheet.create({
  // OVERLAPPING CARD POSITION
  cardWrapper: {
    marginTop: -105,
    marginHorizontal: 20,
    zIndex: 2,
  },

  // CARD DESIGN
  balanceCard: {
    backgroundColor: '#FF597D',
    borderRadius: 22,
    padding: 22,

    elevation: 10,

    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.20,
    shadowRadius: 10,
  },

  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  cardTitle: {
    color: '#f2ebef',
    fontSize: 16,
    fontWeight: '600',
  },

  totalBalance: {
    color: '#f2ebef',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 12,
  },

  divider: {
    height: 1,
    backgroundColor: '#52847F',
    marginVertical: 22,
  },

  balanceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  label: {
    color: '#D8EAE6',
    fontSize: 14,
    marginBottom: 8,
  },

  amount: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
